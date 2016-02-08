myApp.controller('searchCtrl',function($scope,usrSvc){
  $scope.search = function(searchterm){
    usrSvc.getUsers(searchterm)
    .then(function success(users){
      console.log(users)
    })
  }



})