var express = require('express');
var router = express.Router();
var User = require('../models/user')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', function(req,res){
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

module.exports = router;
