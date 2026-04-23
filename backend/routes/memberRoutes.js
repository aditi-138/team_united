const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const Member = require("../models/Member");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.post("/members", upload.single("image"), async (req, res) => {
  try {
    const { name, role, email, contact, additionalDetails } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Name is required." });
    }

    const member = new Member({
      name,
      role,
      email,
      contact,
      additionalDetails,
      image: req.file ? req.file.filename : "",
    });

    const savedMember = await member.save();
    return res.status(201).json(savedMember);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create member.", error: error.message });
  }
});

router.get("/members", async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    return res.json(members);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch members.", error: error.message });
  }
});

router.get("/members/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found." });
    }

    return res.json(member);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch member.", error: error.message });
  }
});

router.delete("/members/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found." });
    }

    if (member.image) {
      const filePath = path.join(__dirname, "..", "uploads", member.image);
      fs.unlink(filePath, () => {});
    }

    await Member.findByIdAndDelete(req.params.id);
    return res.json({ message: "Member deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete member.", error: error.message });
  }
});

module.exports = router;
