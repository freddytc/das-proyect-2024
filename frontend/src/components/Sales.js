import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function SalesManagement({ setShowSaleModal, onSelectSale }) {
  const [sales, setSales] = useState([]);

  // Función para obtener las ventas del backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/sales") // Call the backend endpoint
      .then((response) => {
        setSales(response.data); // Stores the data in the “salts” status
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, []); // This effect is executed only once when loading the component.

  const viewSaleDetails = (sale) => {
    onSelectSale(sale);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sales Management</h1>

      <div className="mb-3 text-end">
        <button className="btn btn-outline-primary" onClick={() => setShowSaleModal(true)}>
          New Sale
        </button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Client</th>
            <th>Sale Date</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.user?.username}</td>
              <td>{sale.client}</td>
              <td>{sale.saleDate}</td>
              <td>{sale.total}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => viewSaleDetails(sale)}
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

export default SalesManagement;
