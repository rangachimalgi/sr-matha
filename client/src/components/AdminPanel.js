import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContainer } from "../App";
import axios from "axios";
function AdminDashboard() {
  const { CartItem } = useContext(DataContainer);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/auth/users"
        ); // adjust the URL to your backend endpoint
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  

  // Calculate total revenue
  const totalRevenue = CartItem.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Panel</h2>

      <div className="col-md-4">
        <div className="card bg-info text-white mb-3">
          <div className="card-body">
            <h5 className="card-title">Total Users</h5>
            <h3>{users.length}</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <Link to="/admin/view-orders" className="text-decoration-none">
            <div className="card bg-primary text-white mb-3">
              <div className="card-body">
                <h5 className="card-title">View Orders</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/admin/view-users" className="text-decoration-none">
            <div className="card bg-success text-white mb-3">
              <div className="card-body">
                <h5 className="card-title">View Users</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Revenue</h5>
              <h3>${totalRevenue.toFixed(2)}</h3>{" "}
              {/* Assuming revenue is in dollars */}
            </div>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="mt-5">
        <h3>Users List</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
