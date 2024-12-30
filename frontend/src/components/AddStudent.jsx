// src/components/AddStudent.js
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import myimg from "../assets/tnau.jpeg";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    department: "",
    inTime: "", // Add inTime to the formData
    outTime: "",
  });
  const inputRef = useRef(null);
  const [isCheckin, setIsCheckin] = useState(true);
  const [studentId, setStudentId] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const URL = isCheckin
      ? "https://lablogin-1.onrender.com/api/students/checkin"
      : "https://lablogin-1.onrender.com/api/students/checkout";
    try {
      const response = await axios.post(URL, { studentId });
      alert(response?.data?.message);
      setStudentId("");
      inputRef.current.value = null;
      inputRef.current.focus();
    } catch (error) {
      console.error("There was an error creating the student!", error);
    }
  };

  useEffect(() => {
    console.log(studentId.length);
    inputRef.current.focus();
    if (studentId === "" || studentId.length < 10) return;
    handleSubmit();
  }, [studentId]);
  return (
    <div
      className="vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${myimg})`, // Replace with the actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={() => inputRef.current.focus()}
    >
      <div
        className="container bg-light p-5 rounded"
        style={{ maxWidth: "600px", opacity: 0.9 }}
      >
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="check"
            id="check"
            onChange={() => {
              setIsCheckin(true);
              inputRef.current.focus();
            }}
            checked={isCheckin}
          />
          <label className="cursor-pointer" htmlFor="check">
            Checkin
          </label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="out"
            id="out"
            onChange={() => {
              setIsCheckin(false);
              inputRef.current.focus();
            }}
            checked={!isCheckin}
          />
          <label className="cursor-pointer" htmlFor="out">
            Checkout
          </label>
        </div>
        <h2 className="fs-1 text-center mb-4 text-decoration-underline">
          Scan The Bar Code to CHECK-{isCheckin ? "IN" : "OUT"} STUDENT
        </h2>
        {/* //<form onSubmit={handleSubmit}>*/}
          {/* <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div> */}
          <div className="mb-3">
            {/* <label className="form-label">Student ID</label> */}
            <input
              type="text"
              autoFocus
              ref={inputRef}
              name="studentId"
              tabIndex={0}
              style={{ opacity: 0, position: "absolute", left: "-999999px" }}
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div>
            <img
              src="https://i5.walmartimages.com/asr/4f22e2e6-607e-44c8-b2e2-62fe30fd3774_1.84bc407c843ab6eb3166c11faedc55f5.jpeg"
              alt="BAR CODE SCANNER"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          {/* <div className="mb-3">
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
          <div className="mb-3">
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
          </div> 
          <button type="submit" className="btn btn-primary w-100">
            Add Student
          </button>*/}
        {/*</form>*/}
      </div>
    </div>
  );
};

export default AddStudent;
