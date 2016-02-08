var express = require('express');
var router = express.Router();
var User = require('../models/user');
var auth = require('./authMiddleware');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', function(req,res){
  console.log(req.body)
  var user = new User();
  user.username= req.body.username;
  user.email= req.body.email;
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

router.get('/members/:name', function(req,res){
  User.find({
    fullname: req.params.name
  },function(err, user){
    if(err){
      res.send('Error: ', err)
    }
    res.send(user)
  })
})

router.get('/userlist/:name',function(req,res){
  User.find({username:req.params.name}, function(err, user){
    res.send(user)
  })
})

module.exports = router;
