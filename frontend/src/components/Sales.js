import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SalesManagement({ setShowSaleModal, onSelectSale }) {
  //  statement of sales
  const [sales, setSales] = useState([
    { id: 1, productName: "Product A", client: "John Doe", saleDate: "2024-10-01", total: 150.0 },
    { id: 2, productName: "Product B", client: "Jane Smith", saleDate: "2024-10-02", total: 200.0 },
    { id: 3, productName: "Product C", client: "Bob Johnson", saleDate: "2024-10-03", total: 300.0 },
  ]);

  const viewSaleDetails = (sales) => {
    onSelectSale(sales);
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
            <th>Product Name</th>
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
              <td>{sale.productName}</td>
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
