const express = require('express');
const app = express();
const dotenv = require('dotenv');
require('./db/db');
const cors = require('cors');
const user = require('./routes/userRoutes')
dotenv.config({});

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({credentials:true, origin:'http://localhost:5173/'}));

app.use('/api/v1', user);

app.listen(PORT, ()=>{
    console.log(`server is running on port:${PORT}`)
})