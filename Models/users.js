const mongodb = require('mongodb');
const db = require('../Utils/database');

class User {
    constructor(id, name, password) {
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.name = name;
        this.password = password;
    }

    save() {
        const database = db.getDb();

        if (this._id) {
            return database.collection('users').updateOne({ _id: this._id }, { $set: this });
        } else {
            return database.collection('users').insertOne(this)
                .then(result => {
                    console.log(result);
                })
                .catch(err => console.log(err))
        }
    }

    static findOne(filter) {
        const database = db.getDb();

        return database.collection('users').findOne(filter)
            .then(user => {
                return user;
            })
            .catch(err => console.log(err));
    }

    static findById(userId) {
        const database = db.getDb();

        return database.collection('users').find({ _id: new mongodb.ObjectId(userId) }).toArray()
            .then(users => {
                return users[0]
            })
            .catch(err => console.log(err))
    }
}

module.exports = User;