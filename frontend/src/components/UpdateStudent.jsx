// src/components/UpdateStudent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import myimg from "../assets/tnau.jpeg";

const UpdateStudent = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    department: "",
    inTime: "",
    outTime: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(
          `https://lablogin-1.onrender.com/api/students/${id}`
        );
        // Ensure the data structure matches your formData
        setFormData({
          name: res.data.name || "",
          studentId: res.data.studentId || "",
          department: res.data.department || "",
          inTime: res.data.inTime || "", // Ensure this is in datetime-local format
          outTime: res.data.outTime || "", // Ensure this is in datetime-local format
        });
      } catch (error) {
        console.error("Error fetching student data", error);
        // Optionally add error state here to inform users
      }
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://lablogin-1.onrender.com/api/students/update/${id}`,
        formData
      );
      navigate("/students");
    } catch (error) {
      console.error("There was an error updating the student!", error);
      // Optionally add error state here to inform users
    }
  };

  return (
    <div
      className="vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${myimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="container bg-light p-5 rounded"
        style={{ maxWidth: "600px", opacity: 0.9 }}
      >
        <Container className="mt-5">
          <h2 className="text-center mb-4">Update Student</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formStudentId">
                  <Form.Label>Student ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                    placeholder="Enter student ID"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    placeholder="Enter department"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formInTime">
                  <Form.Label>In Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="inTime"
                    value={formData.inTime}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formOutTime">
                  <Form.Label>Out Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="outTime"
                    value={formData.outTime}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="mt-3">
              Update Student
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default UpdateStudent;
