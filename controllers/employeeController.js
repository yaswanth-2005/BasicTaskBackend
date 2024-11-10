const Employee = require("../models/Employee");

const addEmployee = async (req, res) => {
  const { name, age, position, department, email } = req.body;
  const employee = await Employee.create({
    name,
    age,
    position,
    department,
    email,
  });
  res.status(201).json(employee);
};

const getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

module.exports = { addEmployee, getEmployees };
