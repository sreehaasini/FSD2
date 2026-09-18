const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// MongoDB Atlas connection
mongoose.connect("dburl")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    rollNumber: String,
    course: String
});

const Student = mongoose.model("Student", studentSchema, "students");

// Configuration
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// HOME ROUTE
// Fetches students and renders the EJS page
app.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.render("apphome", { students });
    } catch (err) {
        res.status(500).send("Error fetching students");
    }
});


// CREATE STUDENT
app.post("/students", async (req, res) => {
    try {
        const student = new Student({
            name: req.body.name,
            rollNumber: req.body.rollNumber,
            course: req.body.course
        });

        await student.save();

        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: "Error creating student" });
    }
});


// DELETE STUDENT
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting student" });
    }
});


// START SERVER
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});