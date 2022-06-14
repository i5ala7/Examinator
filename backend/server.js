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

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth")
const questionRoutes = require("./routes/questions")
const planExamsRoutes = require("./routes/examsPlans")
const CompainRoutes = require("./routes/complain")
const JustifyRoutes = require("./routes/justify")

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/plan",planExamsRoutes );
app.use("/api/complain",CompainRoutes );
app.use("/api/justify",JustifyRoutes );


app.listen(port, ()=>{
    console.log('server is running on port:', port);
})

