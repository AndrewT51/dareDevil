myApp.controller('infoBox',function($scope,usrSvc,webToken){
  var jwt = webToken.getToken;
  usrSvc.getUserDetails(jwt)
  .then(function success(user){
    var myLocalDetails ={
      username: user.data.username,
      fullname: user.data.fullname.join(''),
      email: user.data.email,
      friendList: user.data.friends
    }
    
  })

})