// src/components/EditProduct.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EditProduct({ product, setShowEditProductModal, onUpdateProduct }) {
  const [productName, setProductName] = useState(product.name || "");
  const [price, setPrice] = useState(product.price || 0);
  const [amount, setAmount] = useState(product.amount || 0);

  useEffect(() => {
    // Set product values when opening the modal
    if (product) {
      setProductName(product.name);
      setPrice(product.price);
      setAmount(product.amount);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { ...product, name: productName, price, amount };
    onUpdateProduct(updatedProduct); // Call function to update the product
    setShowEditProductModal(false); // Close modal
  };

  return (
    <>
      {/* Dark modal background*/}
      <div className="modal-backdrop fade show" style={{ zIndex: 1040 }} />
      <div className="modal fade show" style={{ display: "block", zIndex: 1050 }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content"> {/* Light modal background */}
            <div className="modal-header">
              <h5 className="modal-title">Editar Producto</h5>
              {/*Close button */}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowEditProductModal(false)}
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Product Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Product Price"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Product Amount"
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditProductModal(false)}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
