const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

var League = require('./league');

var mongoOp = require("../models/user");

//var leaguelist = [];

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    leagues: {
        type: Array,
        'default': []
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

module.exports.addLeague = function(newLeague, callback) {
    newLeague.save(callback);
    //leaguelist.push(newLeague);
    //UserSchema.leagues.push(newLeague);
}

module.exports.getLeagues = function(name) {
    User.find({username: name}, [this.leagues], function (err, data) {
        if(err) throw err;
        return data;
    })
}


/*
module.exports.addLeague = function(id, newLeague, callback) {
    league = League.findById(id, callback);
    newLeague.save(league);
}
*/