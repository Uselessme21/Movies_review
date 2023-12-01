const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const { MONGODB_URI } = process.env;

const connection= mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to mongoDB')
}).catch((err)=>{
    console.log(err)
})

app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', movieRoutes);
app.use('/api', reviewRoutes);

module.exports = {connection,app};

// 3sum problem