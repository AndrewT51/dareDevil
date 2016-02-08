myApp.controller('infoBox',function($scope,usrSvc,store){
  // this gets the JWT from the store factory and uses it
  // to retrieve the personal data from the database.
  var jwt = store.getToken;
  var userId = usrSvc.openJWT(jwt)
  usrSvc.getUserDetails(jwt,userId)
  .then(function success(user){
    $scope.myLocalDetails ={
      username: user.data.username,
      fullname: user.data.fullname.join(' '),
      email: user.data.email,
      friends: user.data.friends
    }
  })

})