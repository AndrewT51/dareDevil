var express = require('express');
var router = express.Router();
var User = require('../models/user');
var auth = require('./authMiddleware');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// This is the initial signing up and creation of new user in the database

router.post('/signup', function(req,res){
  console.log(req.body)
  var user = new User();
  user.username= req.body.username;
  user.email= req.body.email;

  // I initially thought the search was for the name, so I split the fullname into
  // an array of the name parts so that any one part searched for would match. But, after
  // rereading the task, it is only the username I need to implement a search for.
  user.fullname= req.body.fullname.split(' ');
  user.setPassword(req.body.password);
  user.save(function(err,user){
    if (err){
      res.send(err)
    }else{
      var jwt = user.generateJWT();
      res.send(jwt);
    }
  })
})

router.post('/signin', function(req,res){
  User.findOne({
    username: req.body.username
  } , function(err,user){
    if(!user || !user.validatePassword(req.body.password)){
      res.status(401).send('Invalid login credentials')
    }else{
      var jwt = user.generateJWT();
      res.send(jwt); 
    }
  })
})

router.get('/mydetails/:id',auth, function(req,res){
  User.findById(req.params.id,function(err,user){
    if(err){
      res.send(err)
    }
    res.send(user)

  })
})

// Although there are only a few fields in each record, I just want to demonstrate
// that I can return a selected few, so here I explicitly tell the db to return three 
// named fields 
router.get('/members/:name', function(req,res){
  User.findOne({
    fullname: req.params.name
  },'fullname email username',function(err, user){
    if(err){
      res.send('Error: ', err)
    }
    res.send(user)
  })
})

// This route will return all the users in the database after filtering out your own
// details
router.get('/allUsers/:ownId',function(req,res){
  User.find({}, function(err, users){
    var ownNameRemoved =users.filter(function(user){
      if(user._id != req.params.ownId){
        return user;
      }
    })
    res.send(ownNameRemoved)
  })
})

router.get('/userlist/:name',function(req,res){
  User.find({username:req.params.name}, function(err, user){
    res.send(user)
  })
})

module.exports = router;
