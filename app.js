import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = employees.find((e) => e.id === +id);

  const express = require('express');
const app = express();

const employeeRouter = require('./routes/employees');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());

// Routes
app.use('/employees', employeeRouter);

// Error handling middleware (catch-all)
app.use(errorHandler);

module.exports = app;

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});
