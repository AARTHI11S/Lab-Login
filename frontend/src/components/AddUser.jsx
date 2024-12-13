// src/components/AddStudent.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import myimg from "../assets/tnau.jpeg";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    department: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lab-login.onrender.com/api/users/add",
        formData
      );
      // Optionally check the response here if needed
      console.log(response.data); // Check the response from the server
      alert("user added successfully");
      setFormData({ name: "", studentId: "", department: "" });
    } catch (error) {
      console.error("There was an error creating the student!", error);
    }
  };

  return (
    <div
      className="vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${myimg})`, // Replace with the actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="container bg-light p-5 rounded"
        style={{ maxWidth: "600px", opacity: 0.9 }}
      >
        <h2 className="fs-1 text-center mb-4 text-decoration-underline">
          ADD USER
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">In Time</label>
            <input
              type="datetime-local"
              name="inTime"
              value={formData.inTime}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Out Time</label>
            <input
              type="datetime-local"
              name="outTime"
              value={formData.outTime}
              onChange={handleChange}
              className="form-control"
            />
          </div> */}
          <button type="submit" className="btn btn-primary w-100">
            Add user
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
