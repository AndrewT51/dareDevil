myApp.controller('homeCtrl', function($scope,usrSvc,webToken,$state){
  var signUpOrIn;
  $scope.memberStatus = false;

  $scope.submit = function(){
    var wrapObj = {
      username: $scope.username,
      password: $scope.password,
      fullname: $scope.fullname,
      email: $scope.email
    }
    signUpOrIn = $scope.memberStatus ? "signin" : "signup";
    console.log(wrapObj)
    usrSvc[signUpOrIn](wrapObj)
    .then(function success(data){
      // The JWT is returned in the response and stored in a factory for global access
      // and then the page is redirected to the users page
      webToken.setToken(data)
      $state.go('profile')


    }, function error(err){
      $scope.password = '';
      console.log(err.data || err)
    })
  }
})