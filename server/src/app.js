const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// const cookieSession = require('cookie-session')
// const expressS = require('express-session')
require('./db/conn.js')
const authen = require('./middleware/Authen.js')
dotenv.config({ path: '../config.env' })

const app = express();

//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json())
app.use(cookieParser)


//routes
const FirstRoute = require('./routes/FirstRoute.js')
const NotesRoute = require('./routes/NotesRoute.js')


app.use('/auth', FirstRoute);
app.use('/notes', NotesRoute)

app.listen(5000, ()=>{
    console.log("Connection is running");
})

