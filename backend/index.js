const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const UserRoutes = require("./routes/UserRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ssaarthi11:9JpqlH2jqUSGOW1g@cluster0.m0lrh.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/students", studentRoutes);
app.use("/api/users", UserRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
