"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/user");
const mongoose = require("mongoose");
const login = async (req, res) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then((user) => {
        if (!user) {
            return res.status(401).json({ error: "Auth failed " });
        }
        //
        //
        bcrypt.compare(req.body.password, user.password, (mist, result) => {
            if (mist) {
                console.log("failed");
                return res.status(401).json({ error: "Auth failed " });
            }
            else if (result) {
                const token = jwt.sign({
                    email: user.email,
                    _id: user._id,
                }, process.env.TOKEN, {
                    expiresIn: "1h",
                });
                return res
                    .status(200)
                    .json({ message: "login successfuly", token: token });
            }
        });
    })
        .catch((err) => {
        return res.status(400).json({ error: err });
    });
};
