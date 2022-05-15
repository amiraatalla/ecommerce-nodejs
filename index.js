const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000l
dotenv.config();

const app = express();


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

