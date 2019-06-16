const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

var leaguelist = require('../models/user');

//League Schema
const LeagueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const League = module.exports = mongoose.model('League', LeagueSchema);

module.exports.getLeagueById = function(id, callback){
    League.findById(id, callback);
}

module.exports.getLeagueName = function(name, callback){
    const query = {name: name}
    League.findOne(query, callback);
}

module.exports.addLeague = function(newLeague, callback, err){
    if(err) throw err;
    newLeague.save(callback);
    leaguelist.push(newLeague);
}

module.exports.compareId = function(candidateId, hash, callback) {
    bcrypt.compare(candidateId, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}