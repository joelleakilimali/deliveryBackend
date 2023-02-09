const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Basket = require("../controllers/basket");

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user) {
        console.log("this email adress exist ");
        return res.status(409).json({ message: "Email adress already used" });
      } else {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
          telephone: req.body.telephone,
          noms: req.body.noms,
          prenom: req.body.prenom,
          adresse: req.body.adresse,
          password: bcrypt.hashSync(req.body.password, 8),
        });
        console.log(user);
        user
          .save()
          .then((result) => {
            res.status(200).json({
              message: "User created ",
              newUser: {
                password: result.password,
                email: result.email,
                _id: result._id,
              },
              request: {
                type: "Get",
                url: "http://localhost:3001/user/" + result._id,
              },
            });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
        const theUser = User.findOne({ email: req.body.email });
        console.log("id :", theUser.id);
      }
    });
});

router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Auth failed " });
      }

      //

      //

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          console.log("mistake", err);
        }
        if (!result) {
          return res.status(401).json({ message: "Auth failed " });
        }
        const token = jwt.sign(
          {
            email: user.email,
            _id: user._id,
          },
          process.env.TOKEN,
          {
            expiresIn: "1h",
          }
        );

        return res
          .status(200)
          .json({ message: "login successfuly", token: token });
      });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).json({ message: "user deleted" });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
router.get("/", (req, res, next) => {
  User.find()
    .exec()
    .then((users) => {
      res.status(200).json({ message: users });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .exec()
    .then((users) => {
      res.status(200).json({ message: users });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

module.exports = router;
