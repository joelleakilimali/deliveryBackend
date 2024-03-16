"use strict";
//in here we will use express that will help us to handle our request easily
//code are execute in sequence
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// kind of saving all the function of express in this variable like an object from the classexpress
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
// import basketRoutes from "../api/routes/basket.js";
// import userRoutes from "../api/routes/user";
// import orderRoutes from "../api/routes/order";
// import productRoutes from "../api/routes/product.js"; //this variable is kind of pointing the file product.js so that all the middlware of app.use using this variable will go there
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
(0, dotenv_1.config)();
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(config_1.CONFIG.MONGODB_URL, {}, () => {
    console.log('Connected to database');
});
app.use((0, cors_1.default)({ origin: '*' }));
app.use((0, morgan_1.default)('dev')); // help us to see the type of request that we have made , the status and the route we used
app.use(body_parser_1.default.urlencoded({ extended: false })); // determine type of data we gonna parse
app.use(body_parser_1.default.json());
// Routes to handle
// app.use("/products", productRoutes);
// app.use("/orders", orderRoutes);
app.use('/users', userRoutes);
// app.use("/baskets", basketRoutes);
//if we enter a route that is not valid it will come here (1)
app.use((req, res, next) => {
    console.log('Got here');
    const error = new Error('not found');
    // error.status = 404;
    next(error);
});
