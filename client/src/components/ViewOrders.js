import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadReportForm from "./UploadReportForm.js";
import { isValid, format, parseISO } from 'date-fns';
import DatePicker from "react-datepicker";
import "font-awesome/css/font-awesome.min.css";
import "../Styles/ViewOrders.css";
import "react-datepicker/dist/react-datepicker.css";

function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [hiddenReports, setHiddenReports] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateChange = (orderId, date) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [orderId]: date,
    }));
  };

  const hideReport = (orderId, reportLink) => {
    setHiddenReports((prevState) => [...prevState, { orderId, reportLink }]);
  };

  const sendReportsByEmail = async (orderId, Email) => {
    try {
      const response = await axios.post(
        `http://localhost:8082/api/orders/${orderId}/send-reports-by-email`
      );
      console.log("url process", process.env.REACT_APP_API_URL);
      if (response.status === 200) {
        alert(`Reports sent to ${Email} successfully!`);
      } else {
        alert("Failed to send reports. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending reports:", error);
      alert("Error occurred while sending reports.");
    }
  };

  const scheduleMessage = async (orderId, phoneNumber) => {
    try {
      // Delay the execution of the message sending logic by 5 minutes (300,000 milliseconds)
      const delayInMilliseconds = 10 * 1000; // 10 seconds

  
      await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));

      const apiUrl = process.env.REACT_APP_API_BASE_URL || 'https://sr-matha.onrender.com/';

      console.log("api url",apiUrl);
  
      // Now, make an API request to trigger the send-instant-message action
      const response = await axios.post(apiUrl + '/api/send-instant-message', {
        phoneNumber,
        message: 'Your instant message content here',
      })
  
      if (response.status === 200) {
        console.log('Instant message sent successfully!');
      } else {
        console.error('Failed to send instant message.');
      }
    } catch (error) {
      console.error('Error sending instant message:', error);
    }
  };  
  
  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('http://localhost:8082/api/orders');
        console.log('Fetched orders:', response.data);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="view-orders-container table-responsive">
      <h2 className="mb-4">Admin Panel - View Seva Details</h2>
      {orders.length === 0 ? (
        <p className="alert alert-info">No orders found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Seva ID</th>
              <th>Devotee Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>PhoneNo</th>
              <th>Gotra</th>
              <th>Seva</th>
              <th>Upload Seva Report</th>
              <th>Status</th>
              <th>Seva Report</th>
              <th>Download Reports</th>
              <th>Send Reports to user</th>
              <th>Schedule Action</th>
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
                <td>{order.age}</td>
                <td>
                  {order.cartItems.map((item) => item.productName).join(", ")}
                </td>
                <td>
                  <UploadReportForm orderId={order._id} />
                </td>
                <td>{order.status}</td>
                <td>
                  {order.reports && order.reports.length > 0
                    ? order.reports.map(
                        (report) =>
                          !hiddenReports.some(
                            (hidden) =>
                              hidden.orderId === order._id &&
                              hidden.reportLink === report
                          ) && (
                            <div key={report} style={{ position: "relative" }}>
                              <a
                                className="styled-link"
                                href={`http://localhost:8080${report}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Report
                              </a>
                              <button
                                style={{
                                  position: "absolute",
                                  right: 0,
                                  top: 0,
                                }}
                                onClick={() => hideReport(order._id, report)}
                              >
                                x
                              </button>
                            </div>
                          )
                      )
                    : "Not uploaded"}
                </td>
                <td>
                  {order.reports && order.reports.length > 0 ? (
                    <a
                      className="styled-link"
                      href={`http://localhost:8082/api/orders/${order._id}/download-reports`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download All Reports
                    </a>
                  ) : (
                    "No Reports"
                  )}
                </td>
                <td>
                  <button
                    className="custom-button"
                    onClick={() => sendReportsByEmail(order._id, order.email)}
                    disabled={!(order.reports && order.reports.length > 0)}
                  >
                    <i className="fa fa-envelope"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="custom-button"
                    onClick={() => scheduleMessage(order._id, order.phoneno)}
                  >
                    Schedule Action
                  </button>
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
