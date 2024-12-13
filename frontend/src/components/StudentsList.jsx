// src/components/StudentsList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import myimg from "../assets/tnau.jpeg";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          "https://lab-login.onrender.com/api/students/today"
        );
        setStudents(res.data);
      } catch (error) {
        console.error("Error fetching students data", error);
      }
    };
    fetchStudents();
  }, []);

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
      <div className="container mt-5">
        <h2 className="fs-1 text-warning text-center mb-4 text-decoration-underline">
          Students List for Today
        </h2>
        <Table striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Student ID</th>
              <th>Department</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.studentId}</td>
                <td>{student.department}</td>
                <td>{new Date(student.inTime).toUTCString()}</td>
                <td>
                  {student.outTime
                    ? new Date(student.outTime).toLocaleString()
                    : "N/A"}
                </td>
                <td>
                  <Link
                    to={`/update/${student._id}`}
                    className="btn btn-primary btn-sm mr-2"
                  >
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(student._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

const handleDelete = async (id) => {
  try {
    await axios.delete(
      `https://lablogin-1.onrender.com/api/students/delete/${id}`
    );
    window.location.reload();
  } catch (error) {
    console.error("Error deleting the student", error);
  }
};

export default StudentsList;
