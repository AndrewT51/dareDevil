myApp.controller('profileCtrl',function($scope,webToken,$state, usrSvc){
  // stop people getting access to this page if no JWT is stored
  if(!webToken.getToken){
    $state.go('home')
  }

  $scope.message ="goodbye"
  console.log("here",webToken.getToken)


  console.log('Account Page')
})