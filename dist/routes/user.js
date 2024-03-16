"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.post('/', (req, res, next) => {
    user_1.default.findOne({ email: req.body.email })
        .exec()
        .then((user) => {
        if (user) {
            console.log('this email adress exist ');
            return res.status(409).json({ message: 'Email adress already used' });
        }
        else {
            const user = new user_1.default({
                _id: new mongoose_1.default.Types.ObjectId(),
                email: req.body.email,
                telephone: req.body.telephone,
                noms: req.body.noms,
                prenom: req.body.prenom,
                adresse: req.body.adresse,
                password: bcrypt_1.default.hashSync(req.body.password, 8),
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
            const theUser = user_1.default.findOne({ email: req.body.email });
            console.log('id :', theUser.id);
        }
    });
});
router.post('/login', (req, res, next) => {
    user_1.default.findOne({ email: req.body.email })
        .exec()
        .then((user) => {
        if (!user) {
            return res.status(401).json({ error: 'Auth failed ' });
        }
        //
        //
        bcrypt_1.default.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                console.log('mistake', err);
            }
            if (!result) {
                return res.status(401).json({ message: 'Auth failed ' });
            }
            const token = jsonwebtoken_1.default.sign({
                email: user.email,
                _id: user._id,
            }, process.env.TOKEN, {
                expiresIn: '1h',
            });
            return res
                .status(200)
                .json({ message: 'login successfuly', token: token, user });
        });
    })
        .catch((err) => {
        return res.status(400).json({ message: err });
    });
});
router.delete('/:userId', (req, res, next) => {
    user_1.default.remove({ _id: req.params.id })
        .exec()
        .then((result) => {
        res.status(200).json({ message: 'user deleted' });
    })
        .catch((err) => {
        res.status(400).json({ error: err });
    });
});
router.get('/', (req, res, next) => {
    user_1.default.find()
        .exec()
        .then((users) => {
        res.status(200).json({ message: users });
    })
        .catch((err) => {
        res.status(400).json({ error: err });
    });
});
router.get('/:id', (req, res, next) => {
    user_1.default.findById(req.params.id)
        .exec()
        .then((users) => {
        res.status(200).json({ message: users });
    })
        .catch((err) => {
        res.status(400).json({ error: err });
    });
});
module.exports = router;
