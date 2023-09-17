import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";
import util from "util";
import Order from "../models/Orders.js";
import archiver from "archiver";

const writeFile = util.promisify(fs.writeFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const downloadReports = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).send("Order not found.");
    }

    if (!order.reports || order.reports.length === 0) {
      return res.status(404).send("No reports available for this order.");
    }

    const archive = archiver("zip");

    res.writeHead(200, {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename=reports-${order._id}.zip`,
    });

    archive.pipe(res);

    order.reports.forEach((report) => {
      const reportPath = path.join(__dirname, "..", report);
      archive.file(reportPath, { name: path.basename(report) });
    });

    archive.finalize();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error downloading reports.");
  }
};

export const uploadReport = async (req, res) => {
  try {
    if (!req.files || !Array.isArray(req.files)) {
      return res
        .status(400)
        .send(
          "No files were uploaded or the uploaded files structure is unexpected."
        );
    }

    // Save the uploaded files
    const fileWritePromises = req.files.map((reportFile) => {
      let uploadPath = path.join(
        __dirname,
        "../uploads/reports",
        reportFile.originalname
      );
      return writeFile(uploadPath, reportFile.buffer);
    });

    await Promise.all(fileWritePromises);

    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).send("Order not found.");
    }

    req.files.forEach((reportFile) => {
      order.reports.push("/uploads/reports/" + reportFile.originalname);
    });

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error updating order" });
  }
};
