const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());
const port = 9999;

mongoose.connect("mongodb://localhost:27017/Register")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error", err));

app.use("/api/auth/", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
