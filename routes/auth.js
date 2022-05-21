const router = require('express').Router();
const User = require('../models/User');

const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');

//register api
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})


//login api 


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(404).json("email is not found");


        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(422).json("wrong credentials!");

        const { password, ...others } = user._doc;
        res.status(200).json({
            'message': 'Logged in successfully',
            'user': others
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

