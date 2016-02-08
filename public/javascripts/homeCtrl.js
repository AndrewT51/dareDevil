myApp.controller('homeCtrl', function($scope,usrSvc,webToken,$state){
  var signUpOrIn;
  $scope.memberStatus = false;

  $scope.submit = function(){
    var wrapObj = {
      username: $scope.username,
      password: $scope.password,
      fullname: $scope.fullname,
      email: $scope.email,
    }
    signUpOrIn = $scope.memberStatus ? "signin" : "signup";
    usrSvc[signUpOrIn](wrapObj)
    .then(function success(data){
      console.log(data)
      webToken.setToken(data)
      $state.go('profile')


    }, function error(err){
      $scope.password = '';
      console.log(err.data || err)
    })
  }
})