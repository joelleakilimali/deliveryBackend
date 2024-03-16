"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const transactionSchema = new Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    shortId: String,
    description: String,
    orederId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Order' },
    source: {
        type: String,
        enum: ['Cash', 'OrangeMoney', 'Mpesa'],
        desault: 'Cash',
    },
}, {
    timestamps: true,
});
exports.Transaction = mongoose_1.default.model('Transaction', transactionSchema);
