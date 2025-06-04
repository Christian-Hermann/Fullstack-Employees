import express from "express";

const router = express.Router();

// TODO: this file!
import {
  createEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

router.get("/", async (req, res) => {
  try {
    const employees = await getEmployees();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching empployees:", error);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const employee = await getEmployee(id);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.json(employee);
});

export default router;
