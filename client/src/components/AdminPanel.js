import React, { useState, useEffect } from 'react';
import { fetchOrders } from './api';

function AdminPanel() {
    const [orders, setOrders] = useState([]);
  
    const handleRefreshOrders = async () => {
      const fetchedOrders = await fetchOrders();
      setOrders(fetchedOrders);
    };
  
    return (
      <div>
        <h2>Admin Panel</h2>
        <button onClick={handleRefreshOrders}>Refresh Orders</button>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              {order.customer} ordered {order.product} - Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default AdminPanel;
