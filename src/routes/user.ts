import express from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validator } from '../validator';
import { createUserSchema } from '../validator/schemas/auth';

export const userRouter = express.Router();
userRouter.post('/', validator.body(createUserSchema), (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user) {
        console.log('this email address exist ');
        return res.status(409).json({ message: 'Email address already used' });
      } else {
        const user = new User({
          ...req.body,
          password: bcrypt.hashSync(req.body.password, 10),
        });
        console.log(user);
        user
          .save()
          .then((result) => {
            res.status(200).json({
              message: 'User created ',
              newUser: {
                password: result.password,
                email: result.email,
                _id: result._id,
              },
              request: {
                type: 'Get',
                url: 'http://localhost:3001/user/' + result._id,
              },
            });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
        const theUser = User.findOne({ email: req.body.email });
        // console.log('id :', theUser.id);
      }
    });
});

userRouter.post('/login', (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Auth failed ' });
      }

      //

      //

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          console.log('mistake', err);
        }
        if (!result) {
          return res.status(401).json({ message: 'Auth failed ' });
        }
        const token = jwt.sign(
          {
            email: user.email,
            _id: user._id,
          },
          process.env.TOKEN as string,
          {
            expiresIn: '1h',
          },
        );

        return res
          .status(200)
          .json({ message: 'login successfuly', token: token, user });
      });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
});

userRouter.delete('/:userId', (req, res, next) => {
  User.remove({ _id: (req.params as any).id })
    .exec()
    .then((result) => {
      res.status(200).json({ message: 'user deleted' });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
userRouter.get('/', (req, res, next) => {
  User.find()
    .exec()
    .then((users) => {
      res.status(200).json({ message: users });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
userRouter.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .exec()
    .then((users) => {
      res.status(200).json({ message: users });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
