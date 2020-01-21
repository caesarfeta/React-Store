const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const passport = require("passport");
const users = require("./routes/users");
const cart = require("./routes/cart");

// DB connection
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser:true,
  useCreateIndex:true
});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("DB OK!")
})

// Passport middleware
app.use(passport.initialize());
require("./passport")(passport);
app.use("./routes/users", users);

// App
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const downloadRouter = require('./routes/download');
const cartRouter = require('./routes/cart');
app.use( '/exercises', exercisesRouter );
app.use( '/users', usersRouter );
app.use( '/download', downloadRouter );
app.use( '/cart', cartRouter );
app.listen(port,()=>{
  console.log(`Running on: ${port}`);
});

