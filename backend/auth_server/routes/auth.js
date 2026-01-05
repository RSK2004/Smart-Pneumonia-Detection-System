const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const router = express.Router();
const USERS_FILE = "./users.json";
const SECRET = "laserscan_secret_key";

// Helper
const readUsers = () => JSON.parse(fs.readFileSync(USERS_FILE));
const writeUsers = (data) =>
  fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2));

/* ================= SIGN UP ================= */
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();
  const exists = users.find((u) => u.username === username);
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  writeUsers(users);
  res.json({ message: "Signup successful" });
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

  res.json({ token });
});

module.exports = router;
