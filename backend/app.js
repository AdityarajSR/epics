const express = require('express');

const app = express();

app.use(express.json());

// Route imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);


// Exporting the app
module.exports = app