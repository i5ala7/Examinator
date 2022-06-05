const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log('server is running on port:', port);
})