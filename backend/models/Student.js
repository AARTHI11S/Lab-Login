const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  department: String,
  inTime: { type: Date },
  outTime: { type: Date }
});

module.exports = mongoose.model("Student", studentSchema);
