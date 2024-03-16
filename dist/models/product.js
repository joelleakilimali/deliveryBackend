"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.productSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    name: String,
    price: Number,
    categoryId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Category' },
    imageUrl: String,
    quantity: {
        type: Number,
        default: 0,
    },
    isAvailable: Boolean,
}, {
    timestamps: true,
});
exports.Product = mongoose_1.default.model('Product', exports.productSchema);
