// src/components/EditOrder.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EditOrder({ order, setShowEditModal, onUpdateOrder }) {
  const [client, setClient] = useState(order.client || "");
  const [orderDate, setOrderDate] = useState(order.orderDate || "");
  const [total, setTotal] = useState(order.total || "");
  const [status, setStatus] = useState(order.status || "Pending");

  useEffect(() => {
    //  Set the values of the order when opening the modal
    if (order) {
      setClient(order.client);
      setOrderDate(order.orderDate);
      setTotal(order.total);
      setStatus(order.status);
    }
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = { ...order, client, orderDate, total, status };
    onUpdateOrder(updatedOrder); 
    setShowEditModal(false); // Close modal
  };

  return (
    <>
      {/*Dark modal background */}
      <div className="modal-backdrop fade show" style={{ zIndex: 1040 }} />
      <div className="modal fade show" style={{ display: "block", zIndex: 1050 }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content"> {/*  Light modal background*/}
            <div className="modal-header">
            <h5 className="modal-title">Edit Order</h5>
              {/*Close button*/}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowEditModal(false)}
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="client" className="form-label">Client Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="Client Name"
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
                    placeholder="Order Total"
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
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
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

export default EditOrder;
