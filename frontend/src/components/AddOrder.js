// src/components/AddOrder.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddOrder({ setShowModal }) {
  const [client, setClient] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [total, setTotal] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the order
    console.log({ client, orderDate, total, status });
    setShowModal(false); // close modal
  };

  return (
    <>
      {/* Dark modal background*/}
      <div className="modal-backdrop fade show" style={{ zIndex: 1040 }} />
      <div className="modal fade show" style={{ display: "block", zIndex: 1050 }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content"> {/* Light modal background */}
            <div className="modal-header">
            <h5 className="modal-title">Add New Order</h5>
              {/* Close button*/}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="client" className="form-label">Client</label>
                  <input
                    type="text"
                    className="form-control"
                    id="client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="Enter client name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="orderDate" className="form-label">Order Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="orderDate"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="total" className="form-label">Total</label>
                  <input
                    type="number"
                    className="form-control"
                    id="total"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    placeholder="Enter total amount"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Status</label>
                  <select
                    className="form-select"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">Save Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddOrder;
