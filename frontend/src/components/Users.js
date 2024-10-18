import React, { useEffect, useState } from "react";
import axios from "axios";

function Users({ setShowUserModal, onEditUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users"); // URL del backend
        setUsers(response.data); // Establish data obtained
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); // Calling the function to obtain users when mounting the component
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`); // Make DELETE request
      const filteredUsers = users.filter((user) => user.id !== id); // Filter deleted users
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = (user) => {
    onEditUser(user);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Management</h1>

      <div className="mb-3 text-end">
        <button className="btn btn-outline-primary" onClick={() => setShowUserModal(true)}>
          Add New User
        </button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.fullName}</td> {/* Make sure that the field matches the model. */}
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editUser(user)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>
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

export default Users;
