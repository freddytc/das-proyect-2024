import React, { useEffect, useState } from "react";
import axios from "axios";

function Products({ setShowProductModal, onEditProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products"); 
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      const filteredProducts = products.filter((product) => product.id !== id);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
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
