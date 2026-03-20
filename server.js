const express = require("express");
const path = require("path");

const app = express();

// ✅ THIS IS THE FIX
app.use(express.static(path.join(__dirname, "public")));

// HOME PAGE (optional but safe)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// MENU PAGE
app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "menu.html"));
});

// ORDER PAGE
app.get("/order", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "order.html"));
});

// ADMIN PAGE
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// PORT (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});