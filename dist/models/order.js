"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    shortId: String,
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' },
    marketId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Market' },
    items: {
        type: [
            {
                name: String,
                quantity: Number,
                price: Number,
            },
        ],
        required: false,
    },
    status: {
        type: String,
        enum: ['Pending', 'Canceled', 'Delivered', 'InCart'],
        default: 'InCart',
    },
    paidAt: { type: Date },
}, {
    timestamps: true,
});
exports.Order = mongoose_1.default.model('Order', orderSchema);
