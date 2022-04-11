var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
var User = require('../models/user');

var passport = require('passport');
var authenticate = require('../authenticate');

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
  User.find({})
  .then((users) => {
      console.log('List All Users: ', users);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}),
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      console.log('Register User | User Info: ', req.body);
      if (req.body.firstname)
        user.firstname = req.body.firstname;
        console.log('- Firstname: ', req.body.firstname);
      if (req.body.lastname)
        user.lastname = req.body.lastname;
        console.log('- Lastname: ', req.body.lastname);
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({_id: req.user._id});
  console.log('Login attempted: ', req.user);
  console.log('TOKEN: ', token);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

router.post('/logout', (req, res) => {
  if (req.session) {
    console.log('Logout attempted. Request Session: ', req.session);
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

// Facebook auth
router.get('/facebook/token', passport.authenticate('facebook-token'), (req, res) => {
  if (req.user) {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
  }
});


module.exports = router;
