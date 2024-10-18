// src/components/Orders.js
import React, { useState } from "react";

function Orders({ setShowModal, onEditOrder }) {
  const [orders, setOrders] = useState([
    { id: 1, client: "John Doe", orderDate: "2024-10-01", total: 150.0, status: "Pending" },
    { id: 2, client: "Jane Smith", orderDate: "2024-10-02", total: 200.0, status: "Completed" },
    { id: 3, client: "Bob Johnson", orderDate: "2024-10-03", total: 300.0, status: "Shipped" },
  ]);

  const deleteOrder = (id) => {
    const filteredOrders = orders.filter((order) => order.id !== id);
    setOrders(filteredOrders);
  };

  const editOrder = (order) => {
    onEditOrder(order); 
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Order Management</h1>

      <div className="mb-3 text-end">
        <button className="btn btn-outline-primary" onClick={() => setShowModal(true)}>
          Add New
        </button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Client</th>
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
                <button className="btn btn-warning btn-sm me-2" onClick={() => editOrder(order)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteOrder(order.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
