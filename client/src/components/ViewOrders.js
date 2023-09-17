import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadReportForm from "./UploadReportForm.js";
import "../Styles/ViewOrders.css";

function ViewOrders() {
  console.log("reached the view orders");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("http://localhost:8080/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="view-orders-container table-responsive">
      <h2 className="mb-4">Admin Panel - View Orders</h2>
      {orders.length === 0 ? (
        <p className="alert alert-info">No orders found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>PhoneNo</th>
              <th>Products</th>
              <th>Upload Report</th>
              <th>Status</th>
              <th>Report</th>
              <th>Download Reports</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.phoneno}</td>
                <td>
                  {order.cartItems.map((item) => item.productName).join(", ")}
                </td>
                <td>
                  <UploadReportForm orderId={order._id} />
                </td>
                <td>{order.status}</td>
                <td>
                  {order.reports && order.reports.length > 0
                    ? order.reports.map((report) => (
                        <a
                          key={report}
                          href={`http://localhost:8080${report}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Report
                        </a>
                      ))
                    : "Not uploaded"}
                </td>
                <td>
                  {order.reports && order.reports.length > 0 ? (
                    <a
                      href={`http://localhost:8080/api/orders/${order._id}/download-reports`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download All Reports
                    </a>
                  ) : (
                    "No Reports"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewOrders;
