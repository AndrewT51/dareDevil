myApp.service('usrSvc',function($http){
  this.signup = function(newUser){
    return $http.post('users/signup', newUser)
  }
  this.signin = function(userDetails){
    return $http.post('users/signin', userDetails)
  }
  this.openJWT = function(jwt){
    var middleSegment = jwt.match(/\.(.+)\./)[0];
    console.log(middleSegment);
  }
  this.getUserDetails = function(jwt,userId){
    return $http({
      method: 'GET',
      url: 'users/mydetails/'+ "56b8b20f8c11e6c623a4d285",
      headers:{
        "Authorization": "Bearer " + jwt
      }
    })

  }

})