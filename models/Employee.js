const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  position: String,
  department: String,
  email: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
