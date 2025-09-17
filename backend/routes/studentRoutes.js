import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add student
router.post("/", async (req, res) => {
  try {
    const { name, email, course } = req.body;
    const newStudent = new Student({ name, email, course });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
