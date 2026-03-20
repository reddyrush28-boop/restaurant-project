const express = require("express");
const path = require("path");

const app = express();

// allow frontend files
app.use(express.static(__dirname));

// HOME PAGE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// PORT for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});