"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const marketSchema = new Schema({
    shortId: String,
    name: { type: String, required: true },
    imageUrl: String,
    slogan: {
        type: String,
        default: '',
    },
    phoneNumber: { type: String, required: false },
    email: { type: String, required: false },
}, {
    timestamps: true,
});
exports.Market = mongoose_1.default.model('Market', marketSchema);
