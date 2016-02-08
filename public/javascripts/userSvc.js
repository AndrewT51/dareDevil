myApp.service('usrSvc',function($http){
  this.signup = function(newUser){
    console.log('something')
    return $http.post('users/signup', newUser)
  }
  this.signin = function(userDetails){
    console.log(userDetails)
    return $http.post('users/signin', userDetails)
  }

})