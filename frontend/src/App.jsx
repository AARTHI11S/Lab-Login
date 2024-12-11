// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import StudentsList from "./components/StudentsList";
import UpdateStudent from "./components/UpdateStudent";
import Home from "./components/home";
import AddUser from "./components/AddUser";
import AttendanceGraph from "./components/AttendanceGraph";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Student</Link>
            </li>
            <li>
              <Link to="/students">Students List</Link>
            </li>
          </ul>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <Link className="navbar-brand" href="#"> */}
            <Link className="navbar-brand" href="#" to="/">
              LAB LOGIN
            </Link>
            {/* </Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#" to="/add">
                    Student Entry
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#" to="/add-user">
                    Add User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#" to="/students">
                    Student List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#" to="/summary-graph">
                    Summary Graph
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/summary-graph" element={<AttendanceGraph />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
