"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const authMiddleware = (req, res, next) => {
    // Get the token from Header
    const token = req.header('authorization')?.split(' ')[1];
    console.log(token);
    // check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token,authorization denied' });
    }
    // Verify the token
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.CONFIG.JWT_SECRET);
        console.log('Testing auth...');
        req.user = decoded.user;
        console.log(req.user);
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
exports.authMiddleware = authMiddleware;
