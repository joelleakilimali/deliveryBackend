//in here we will use express that will help us to handle our request easily
//code are execute in sequence

import express from 'express';

// kind of saving all the function of express in this variable like an object from the classexpress
import morgan from 'morgan';

// import basketRoutes from "../api/routes/basket.js";
// import userRoutes from "../api/routes/user";
// import orderRoutes from "../api/routes/order";
// import productRoutes from "../api/routes/product.js"; //this variable is kind of pointing the file product.js so that all the middlware of app.use using this variable will go there

import { config } from 'dotenv';
import mongoose from 'mongoose';
import { CONFIG } from './config';
import cors from 'cors';
import { userRouter } from './routes/user';
import { authRouter } from './routes/auth';

const app = express();
config();
mongoose.set('strictQuery', true);

mongoose.connect(CONFIG.MONGODB_URL, {}, () => {
  console.log('Connected to database');
});

/* GENERAL MIDDLEWARES */
app.use(cors({ origin: '*' }));
app.use(morgan('dev')); // help us to see the type of request that we have made , the status and the route we used
app.use(express.urlencoded({ extended: false })); // determine type of data we gonna parse
app.use(express.json());

/* ROUTE HANDLERS */
app.use('/auth', authRouter);
app.use('/users', userRouter);
// app.use("/products", productRoutes);
// app.use("/orders", orderRoutes);
// app.use("/baskets", basketRoutes);

//if we enter a route that is not valid it will come here (1)
app.use('*', (req, res) => {
  console.log('Got here');
  res.status(404).json({ message: 'Route not found' });
});
//then here (2)

export { app };
