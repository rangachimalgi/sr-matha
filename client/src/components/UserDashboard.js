import React, { useState, useEffect } from "react";
import "../Styles/UserDashBoard.css";

const UserDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8082/api/orders', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error("Failed to fetch orders.");
      }

      setLoading(false);
    }

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <section>
        <h3>Your Orders</h3>

        {loading && <p>Loading...</p>}

        {!loading && !orders.length && <p>No orders found.</p>}

        {!loading && orders.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Report</th>
                {/* Add other relevant columns */}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>{order.totalAmount}</td>
                  <td>{order.status}</td>
                  <td>
                    {order.reports && order.reports.length > 0
                      ? order.reports.map((report) => (
                          <a
                            key={report}
                            href={'http://localhost:8082${report}'}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Report
                          </a>
                        ))
                      : "Not uploaded"}
                  </td>
                  {/* Add other relevant columns */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default UserDashboard;
