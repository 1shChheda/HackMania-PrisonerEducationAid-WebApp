const mongodb = require('mongodb');
const db = require('../Utils/database');

class User {
    constructor(id, firstName, lastName, email, password, role) {
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    save() {
        const database = db.getDb();

        let dbOps;
        if (this._id) {
            // to update the course
            dbOps = database.collection('users').updateOne({ _id: this._id }, { $set: this })

        } else {
            // to insert a new course
            dbOps = database.collection('users').insertOne(this)
        }

        return dbOps
            .then(result => {
                // console.log(result);
            })
            .catch(err => console.log(err))
    }

    async login(email) {
        const database = db.getDb();

        let dbOps = await database.collection('users').findOne({ email });

        return dbOps;
    }
}

module.exports = User;