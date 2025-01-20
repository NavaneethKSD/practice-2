const User = require("../models/userModel.js");

const signup = async (req, res) => {
    try {
        const { email, password, name, dateOfBirth } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send("User already exists");
        }

        const newUser = new User({
            email,
            password,
            name,
            dateOfBirth,
        });
        await newUser.save();
        res
            .status(200)
            .send({ data: newUser , message: "User registered successfully",  });

        } catch (error) {
        res.status(500).send("server Error");2

        }

       
    };

    module.exports = { signup };