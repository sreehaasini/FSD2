const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Atlas connection
const dbURI = "dburl"
mongoose
    .connect(dbURI)
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
    });


// STEP 3: Create Schema and Model

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },

    course: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }
});

const Student = mongoose.model("Student", studentSchema);


// STEP 4: CREATE
// Add a new student

app.post("/students", async (req, res) => {
    try {
        const student = new Student({
            name: req.body.name,
            rollNumber: req.body.rollNumber,
            course: req.body.course,
            isActive: req.body.isActive
        });

        const savedStudent = await student.save();

        res.status(201).json(savedStudent);
    }
    catch (error) {
        res.status(400).json({
            message: "Error saving student",
            error: error.message
        });
    }
});


// STEP 4: READ
// Get all students

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});


// STEP 4: UPDATE
// Update a student using ID

app.put("/students/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(updatedStudent);
    }
    catch (error) {
        res.status(400).json({
            message: "Error updating student",
            error: error.message
        });
    }
});


// STEP 4: DELETE
// Delete a student using ID

app.delete("/students/:id", async (req, res) => {
    try {
        const deletedStudent =
            await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student record deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});


// Start Express server

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Ready for CRUD operations testing.");
});
