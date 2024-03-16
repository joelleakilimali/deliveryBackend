"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const adminSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    },
    password: { type: String, required: true },
    marketId: String,
    role: {
        type: String,
        enum: ['Admin', 'Delivery'],
        default: 'Admin',
    },
}, {
    timestamps: true,
});
exports.Admin = mongoose_1.default.model('Admin', adminSchema);
