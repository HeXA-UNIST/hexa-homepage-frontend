const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'build', req.url);
    console.log("request", req.url);
    if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
      res.sendFile(filePath);
    } else {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});