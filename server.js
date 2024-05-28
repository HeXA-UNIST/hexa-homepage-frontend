const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/activity", (req, res) => {
    console.log("request activity - ", req.url);
    res.sendFile(filePath);
});
app.get("/project", (req, res) => {
    console.log("request project - ", req.url);
    res.sendFile(filePath);
});
app.get("/service", (req, res) => {
    console.log("request service - ", req.url);
    res.sendFile(filePath);
});
app.get("/news", (req, res) => {
    console.log("request news - ", req.url);
    res.sendFile(filePath);
});
app.get("/seminar", (req, res) => {
    console.log("request seminar - ", req.url);
    res.sendFile(filePath);
});
app.get("*", (req, res) => {
    const filePath = path.join(__dirname, "build", req.url);
    console.log("request", req.url);
    if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
        res.sendFile(filePath);
    } else {
        res.sendFile(path.join(__dirname, "build", "index.html"));
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
