const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const League = require('../models/league');

var mongoOp = require("../models/user");



//var leaguelist = require('../models/user')
var leaguelist = [];

//Register Route
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    })
});

//Authenticate Route
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

//Profile Route
router.get('/profile', passport.authenticate('jwt', {session: false}),(req, res, next) => {
    res.json({user: req.user});
});

//Add League Route
router.post('/createleague', (req, res, next) => {

    let newLeague = new League({
        name: req.body.name
    });

    leaguelist.push(newLeague);

    let addLeag = new User({
        leagues: leaguelist
    });
    
    User.addLeague(newLeague, err => {
        if(err) {
            res.json({success: false, msg: 'Failed to create league'})
        } else {
            leaguelist.push(newLeague);
            res.json({success: true, msg: 'League has been created', addLeag});
        }
    });
});

router.get('/getleagues', (req, res, next) => {

    mongoOp.find({username: 'mike'},(err, data) => {
        if(err) {
            res.json({success: false, msg: 'Failed to get username'})
        } else {
            res.json({success: true, msg: 'User data: ' + data});
            User.getLeagues('mike');
        }
    })

/*
    User.getUserByUsername(tempUsername, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        User.getLeagues();
    })
*/

    //User.getLeagues();
    
    /*
    const tempUsername = User.findOne(User)

    User.getUserByUsername(tempUsername, err => {
        mongoOp.find({}, data => {
            if(err) {
                res.json({success: false, msg: 'Failed to fetch leagues'});
            } else {
                res.json({success: true, msg: 'Leagues:' + data});
            }
        })
    })
    */
    /*
    mongoOp.find({}, (err, data) => {
        if(err) {
            res.json({success: false, msg: 'Failed to fetch leagues'});
        } else {
            res.json({success: true, msg: 'Leagues:' + data});
        }
    })
    */
    /*
    let tempArray = User.getLeagues();
    res.json({success: true, tempArray, leaguelist});
    */
});

module.exports = router;


/*
//Add League Route
router.post('/getleague', (req, res, next) => {
    League.getLeagueById(id, (err, league) => {
        if(err) throw err;
        if(!league){
            return res.json({success: false, msg: 'League not Found'});
        }

        User.addLeague()
    }) 

})
*/