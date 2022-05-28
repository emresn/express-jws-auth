const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');



const app = express();
dotenv.config({path: 'config.env'});
app.use(morgan('tiny'));



app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

// DB connect
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Service is running on http://localhost:${PORT}`)
  });
  })
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 8080


// Routes 
app.use('/',require('./routes/router'));

