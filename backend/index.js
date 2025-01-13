const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
dotenv.config({});
require('./db/db');
const cors = require('cors');
const user = require('./routes/userRoutes')

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/api/v1', user);

app.listen(PORT, ()=>{
    console.log(`server is running on port:${PORT}`)
})