import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function OrdersManagement({ setShowOrderModal, onSelectOrder }) {
  const [orders, setOrders] = useState([]);

  // Get backend commands
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders") // Endpoint to get all commands
      .then((response) => {
        setOrders(response.data); // Stores the data in the state
      })
      .catch((error) => {
        console.error("Error fetching orders data:", error);
      });
  }, []); // Runs only when the component is loaded

  const viewOrderDetails = (order) => {
    onSelectOrder(order);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Orders Management</h1>

      <div className="mb-3 text-end">
        <button className="btn btn-outline-primary" onClick={() => setShowOrderModal(true)}>
          New Order
        </button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Supplier</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.client}</td>
              <td>{order.orderDate}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => viewOrderDetails(order)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersManagement;
