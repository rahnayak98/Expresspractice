const express= require('express');
const grocerroute=require('./routes/grocieries');
// const database=require('./database/index')(express)
require('./strategies/local')

const mongoose=require('mongoose')
const passport=require('passport')

const authroute=require('./routes/auth')
const session=require('express-session')




const app=express();
const PORT=2000;




mongoose.connect('key');

app.use(express.json());

app.use(session({
    secret: 'your_secret_key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());

// app.use('/api',grocerroute)
app.use('/api',authroute)



  
app.listen(PORT,()=>console.log('API running'));


