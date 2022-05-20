const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/user.js');
const productRoute = require('./routes/products.js');

const PORT = process.env.PORT || 3000;
dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('Mongo DB connected Successfully!'))
    .catch((err) => {
        console.log(err);
    });

//apis router
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

