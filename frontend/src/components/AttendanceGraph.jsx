import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import myimg from "../assets/tnau.jpeg";

function AttendanceGraph() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Default to current month
  const [year, setYear] = useState(new Date().getFullYear()); // Default to current year

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lab-login.onrender.com/api/students/attendance-summary`,
        {
          params: { month, year },
        }
      );
      const data = response.data;
      if (data.length < 1) {
        setAttendanceData([]);
        return;
      }
      // Process data for Recharts format
      const processedData = data.map((item) => ({
        date: item._id, // Date in "YYYY-MM-DD" format
        count: item.count,
      }));

      setAttendanceData(processedData);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [month, year]); // Re-fetch data when month or year changes

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
      <div className="container bg-white">
        <h2>Daily Attendance Summary</h2>

        {/* Month and Year Selectors */}
        <label>
          Select Month:
          <input
            type="number"
            value={month}
            min="1"
            max="12"
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <label>
          Select Year:
          <input
            type="number"
            value={year}
            min="2000"
            onChange={(e) => setYear(e.target.value)}
          />
        </label>

        {/* Line Chart with Recharts */}
        {attendanceData?.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={attendanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <h2>No Data Found</h2>
        )}
      </div>
    </div>
  );
}

export default AttendanceGraph;
