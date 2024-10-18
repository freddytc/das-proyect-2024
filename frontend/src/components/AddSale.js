// src/components/AddSale.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddSale({ setShowSaleModal }) {
  const [productName, setProductName] = useState("");
  const [client, setClient] = useState("");
  const [saleDate, setSaleDate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("paid");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  logic to save the sale
    console.log({ productName, client, saleDate, totalAmount, paymentStatus });
    setShowSaleModal(false); // Close modal
  };

  return (
    <>
      {/* Dark modal background*/}
      <div className="modal-backdrop fade show" style={{ zIndex: 1040 }} />
      <div className="modal fade show" style={{ display: "block", zIndex: 1050 }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content"> {/* Light modal background  */}
            <div className="modal-header">
              <h5 className="modal-title">Add New Sale</h5>
              {/* Close button */}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowSaleModal(false)}
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
                  <label htmlFor="client" className="form-label">Client</label>
                  <input
                    type="text"
                    className="form-control"
                    id="client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="Client"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="saleDate" className="form-label">Sale Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="saleDate"
                    value={saleDate}
                    onChange={(e) => setSaleDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="totalAmount" className="form-label">Total Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalAmount"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    placeholder="Total Amount"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
                  <select
                    className="form-select"
                    id="paymentStatus"
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                    required
                  >
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowSaleModal(false)}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">Add Sale</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSale;
