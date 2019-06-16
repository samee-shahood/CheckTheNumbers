const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const League = require('../models/league');

var mongoOp = require("../models/league");

var leaguelist = require('../models/user');

//Get all Leagues from MongoDB
router.get('/leagues', (req, res, next) => {
    mongoOp.find({}, (err, data) => {
        if(err) {
            res.json({success: false, msg: 'Failed to fetch leagues'});
        } else {
            res.json({success: true, msg: 'Leagues:' + data});
        }
    })
})

// Create League Route
router.post('/createleague', (req, res, next) => {
    let newLeague = new League({
        name: req.body.name
    });

    League.addLeague(newLeague, (err, league) => {
        if(err) {
            res.json({success: false, msg: 'Failed to register league'});
        } else {
            res.json({success: true, msg: 'League Created'});
        }
    })
});

//Authenticate Route
router.post('/authenticateleague', (req, res, next) => {
    const name = req.body.name;

    League.getLeagueName(name, (err, league) => {
        if(err) throw err;
        if(!league){
            return res.json({success: false, msg: 'League not found'});
        }

        League.compareId(leagueid, league.id, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    league: {
                        id: league._id,
                        name: league.name,
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong League ID'});
            }
        });
    });
});


module.exports = router;