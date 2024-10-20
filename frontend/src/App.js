import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Sales from "./components/Sales";
import AddOrder from "./components/AddOrder"; 
import AddProduct from "./components/AddProduct"; 
import AddSale from "./components/AddSale";
import EditOrder from "./components/EditOrder";
import EditProduct from "./components/EditProduct";
import ViewDetails from "./components/DetailSale";
import Users from "./components/Users";
import "./App.css";
import "./style/styles.css";

function App() {
  //establish states
  const [showModal, setShowModal] = useState(false); 
  const [showProductModal, setShowProductModal] = useState(false); 
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [editingOrder, setEditingOrder] = useState(null); 
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showDetailSaleModal, setShowDetailSaleModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const handleEditClick = (order) => {
    setEditingOrder(order); 
    setShowEditModal(true); 

  };

  const handleEditClick1 = (product) => {
    setEditingProduct(product); 
    setShowEditProductModal(true); 
  };

  const handleEditClick2 = (sale) => {
    setSelectedSale(sale);
    setShowDetailSaleModal(true);
  };

  /*const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleLogin = (username, password) => {
    //  user authentication
    console.log("Username:", username);
    console.log("Password:", password);

    setIsAuthenticated(true);
  }*/

  return (

    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <div className="sidebar bg-dark text-white p-3 shadow" id="sidebar">
          <div className="sidebar-header text-center mb-4">
            <h4 className="fw-bold">Management Panel</h4>
            <hr className="border-light" />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <Link className="nav-link text-white d-flex align-items-center" to="/products">
                <i className="bi bi-box-seam fs-4 me-3"></i>
                <span className="link-text">Products</span>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link text-white d-flex align-items-center" to="/orders">
                <i className="bi bi-clipboard-data fs-4 me-3"></i>
                <span className="link-text">Orders</span>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link text-white d-flex align-items-center" to="/sales">
                <i className="bi bi-receipt fs-4 me-3"></i>
                <span className="link-text">Sales</span>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link text-white d-flex align-items-center" to="/users">
                <i className="bi bi-person fs-4 me-3"></i>
                <span className="link-text">Users</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="container-fluid" id="main-content">
          <Routes>
            <Route path="/products"
              element={<Products setShowProductModal={setShowProductModal} onEditProduct={handleEditClick1} />}
            />
            <Route
              path="/orders"
              element={<Orders setShowModal={setShowModal} onEditOrder={handleEditClick} />}
            />
            <Route path="/sales"
              element={<Sales setShowSaleModal={setShowSaleModal} onSelectSale={handleEditClick2} />}
            />
            <Route path="/users" element={<Users />} />
            {/*  Redirect to products when accessing the root*/}
            <Route path="/" element={<Navigate to="/products" replace />} />
          </Routes>
        </div>
      </div>

      {/* User icon and dropdown */}
      <div className="user-icon-container">
        <i id="user-icon" className="bi bi-person-circle"></i>
        <div className="dropdown-menu">
          <a href="#">Log out</a>
        </div>
      </div>

      {/* Modal for adding a new order */}
      {showModal && <AddOrder setShowModal={setShowModal} />}

      {/* Modal for adding a new product */}
      {showProductModal && <AddProduct setShowProductModal={setShowProductModal} />}

      {/* Modal for adding a new sale */}
      {showSaleModal && <AddSale setShowSaleModal={setShowSaleModal} />}

      {/* Modal for viewing sale details */}
      {showDetailSaleModal && selectedSale && (
        <ViewDetails
          setShowDetailsModal={setShowDetailSaleModal}
          sale={selectedSale} // Passes the selected sale 
        />
      )}

      {/* Modal for editing an order */}
      {showEditModal && (
        <EditOrder
          order={editingOrder}
          setShowEditModal={setShowEditModal}
          onUpdateOrder={(updatedOrder) => {
            // Logic for updating the order here
            setShowEditModal(false);
          }}
        />
      )}

      {/* Modal for editing a product */}
      {showEditProductModal && (
        <EditProduct
          product={editingProduct}
          setShowEditProductModal={setShowEditProductModal}
          onUpdateProduct={(updatedProduct) => {
            setShowEditProductModal(false);
            // Updates product status if necessary
          }}
        />
      )}
    </Router>
  );
}

export default App;
