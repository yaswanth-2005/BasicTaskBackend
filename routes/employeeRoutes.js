const express = require("express");
const {
  addEmployee,
  getEmployees,
} = require("../controllers/employeeController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", protect, addEmployee);
router.get("/list", protect, getEmployees);

module.exports = router;
