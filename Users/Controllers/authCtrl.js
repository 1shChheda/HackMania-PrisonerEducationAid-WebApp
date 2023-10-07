const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');

exports.postSignup = (req, res, next) => {
    const { name, password } = req.body;

    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new Models.User(null, name, password);
            return user.save();
        })
        .then(result => {
            return res.status(201).json({ message: "User Registered!" });
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal server error', error });
        });
};