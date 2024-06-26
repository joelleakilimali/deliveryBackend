// import { Order } from '../models/order';
// import mongoose from 'mongoose';
// import { Product } from '../models/product';
//
// exports.orders_get_all = async (req, res, next) => {
//   Order.find()
//     .select('_id product quatity isPaid quantity')
//     .populate('product', 'name _id  price ')
//     .exec()
//     .then((docs) => {
//       if (docs) {
//         const orders = docs;
//         res.status(201).json({
//           message: 'orders fetched',
//           count: orders.length,
//           orders: orders.map((doc) => {
//             return {
//               _id: doc._id,
//               product: doc.product,
//               quantity: doc.quantity,
//               isPaid: doc.isPaid,
//               price: doc.price,
//               request: {
//                 type: 'Get',
//                 url: 'http://localhost:3001/orders/' + doc._id,
//               },
//             };
//           }),
//         });
//       }
//     })
//
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// };
// // get orders from a specific user
// exports.orders_get_all_user = async (req, res, next) => {
//   const userid = req.params.userId;
//   console.log('-->', userid);
//   Order.find({ user: userid })
//     .select('_id product quatity isPaid quantity')
//     .populate('product', 'name _id  price ')
//     .exec()
//     .then((docs) => {
//       if (docs) {
//         const orders = docs;
//         res.status(201).json({
//           message: 'orders fetched',
//           count: orders.length,
//           orders: orders.map((doc) => {
//             return {
//               _id: doc._id,
//               product: doc.product,
//               quantity: doc.quantity,
//               isPaid: doc.isPaid,
//               price: doc.price,
//               request: {
//                 type: 'Get',
//                 url: 'http://localhost:3001/orders/' + doc._id,
//               },
//             };
//           }),
//         });
//       }
//     })
//
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// };
//
// //
// exports.createOrder = async (req, res, next) => {
//   //console.log(req.file);
//   const order = new Order({
//     _id: mongoose.Types.ObjectId(),
//     quantity: req.body.quantity,
//     product: req.body.products,
//     user: req.body.user,
//   });
//   order
//     .save()
//     .then((result) => {
//       console.log(result);
//       res.status(200).json({
//         message: 'order added to the basket',
//         createdOrder: {
//           product: result.product,
//           quantity: result.quantity,
//           _id: result._id,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//
//       res.status(500).json({ error: err });
//     });
// };
//
// exports.order_create = async (req, res, next) => {
//   Product.findById(req.body.products)
//     .exec()
//     .then((product) => {
//       //   if (!product) {
//       //    res.status(500).json({ message: "there is no this product" });
//       //  }
//       const order = new Order({
//         _id: mongoose.Types.ObjectId(),
//         quantity: req.body.quantity,
//         product: req.body.products,
//         user: req.body.user,
//       });
//       return order
//         .save()
//         .then((result) => {
//           console.log(result);
//           res.status(201).json({
//             message: 'order stored',
//             newOrder: {
//               product: result.product,
//               quantity: result.quantity,
//               _id: result._id,
//             },
//             request: {
//               type: 'Get',
//               description: 'get your new order',
//               url: 'http://localhost:3001/orders/' + result.id,
//             },
//           });
//         })
//         .catch((err) => {
//           res.status(500).json({ message: 'Product not found', error: err });
//         });
//     });
// };
// exports.order_by_id = async (req, res, next) => {
//   Order.findById(req.params.orderId)
//     .select('product _id quantity')
//     .populate('product')
//
//     .then((order) => {
//       if (!order) {
//         return res.status(404).json({ message: 'order not found' });
//       }
//       res.status(201).json({ order });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// };
//
// exports.order_delete = async (req, res, next) => {
//   console.log('----->', req.params.orderId);
//   Order.remove({ _id: req.params.orderId })
//     .exec()
//     .then((result) => {
//       res.status(201).json({ message: 'order deleted' });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// };
//
// exports.orderUptdated = async (req, res, next) => {
//   const id = req.params.orderId;
//   Order.findByIdAndUpdate({ _id: id }, { $set: { isDesired: false } })
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         message: 'this order is not desire anymore',
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(404).json({ error: err });
//     });
// };
//
// exports.makeOrder = async (req, res, next) => {
//   const { userId, body } = req.body;
//   console.log('server side', userId);
//   console.log(body.products);
//
//   const order = new Order({
//     _id: mongoose.Types.ObjectId(),
//     products: body.products,
//     user: userId,
//     paid: true,
//     totalPrice: 0,
//     isCancel: false,
//   });
//   return order
//     .save()
//     .then((result) => {
//       console.log(result);
//       res.status(201).json({
//         message: 'order stored',
//         newOrder: {
//           products: result.products,
//           totalPrice: result.totalPrice,
//           isPaid: result.paid,
//           isCancel: result.isCancel,
//           _id: result._id,
//         },
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: 'something went wrong ', error: err });
//     });
// };
