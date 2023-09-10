import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";
import Order from "../models/Orders.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const uploadReport = async (req, res) => {
  console.log("Upload Report endpoint hit !!!");

  if (!req.file) {
    return res.status(400).send("No files were uploaded.");
  }

  let reportFile = req.file;

  console.log("reportFile:", reportFile);
  console.log("req.file:", req.file);

  console.log("__dirname:", __dirname);

  let uploadPath = path.join(
    __dirname,
    "../uploads/reports",
    reportFile.originalname
  );

  fs.writeFile(uploadPath, reportFile.buffer, async function (err) {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send(err);
    }

    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, {
        status: "Completed",
        reportLink: "/uploads/reports/" + reportFile.originalname, // Adjusted this from reportFile.name to reportFile.originalname
      });

      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error updating order" });
    }
  });
};
