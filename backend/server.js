const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

// DB connection

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser:true,
  useCreateIndex:true
});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("DB OK!")
})

// App
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use( '/exercises', exercisesRouter );
app.use( '/users', usersRouter );
app.listen(port,()=>{
  console.log(`Running on: ${port}`);
});

