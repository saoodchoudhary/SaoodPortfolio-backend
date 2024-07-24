const express = require('express');
const mongoose = require('mongoose');

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);


