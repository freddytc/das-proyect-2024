// src/components/Products.js
import React, { useState } from "react";

function Products({ setShowProductModal, onEditProduct }) {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10.0, amount: 100 },
    { id: 2, name: "Product 2", price: 20.0, amount: 200 },
    { id: 3, name: "Product 3", price: 30.0, amount: 300 },
  ]);
  

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const editProduct = (product) => {
    onEditProduct(product);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Management</h1>

      <div className="mb-3 text-end">
        <button className="btn btn-outline-primary" onClick={() => setShowProductModal(true)}>
          Add New Product
        </button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editProduct(product)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>
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

export default Products;

