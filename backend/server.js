const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const memberRoutes = require("./routes/memberRoutes");

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(memberRoutes);

app.get("/", (req, res) => {
  res.send("Student Team Members Management API is running.");
});

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/student_team_members";

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });
