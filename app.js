const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => {
  res.send('Hello World');
});

const contactMeRouter = require('./routes/contactMe');

app.use('/api', contactMeRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);


