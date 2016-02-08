myApp.service('usrSvc',function($http){
  this.signup = function(newUser){
    return $http.post('users/signup', newUser)
  }
  this.signin = function(userDetails){
    return $http.post('users/signin', userDetails)
  }
  this.openJWT = function(jwt){
    // this will take the middle section of the JWT, where the user
    // name and id are and base64 decode it
    var middleSegment = jwt.match(/\.(.+)\./)[1];
    var decodedJwt = JSON.parse(atob(middleSegment));
    return decodedJwt._id
  }
  this.getUsers = function(searchitem){
    return $http.get('users/userlist/'+ searchitem)
  }
  this.getUserDetails = function(jwt,userId){
    return $http({
      method: 'GET',
      url: 'users/mydetails/'+ userId,
      headers:{
        "Authorization": "Bearer " + jwt
      }
    })

  }

})