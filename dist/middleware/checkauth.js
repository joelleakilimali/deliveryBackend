"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.TOKEN);
        req.userData = decoded;
        console.log(decoded);
        next();
    }
    catch (error) {
        return res.status(401).json({ error: "Auth failed " });
    }
};
