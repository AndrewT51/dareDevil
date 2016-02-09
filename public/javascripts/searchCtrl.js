myApp.controller('searchCtrl',function($scope,usrSvc){
  
  usrSvc.getUsers()
  .then(function success(users){
      if(users){
        $scope.people = users.data  
      }
    })
  $scope.search = function(searchterm){
    usrSvc.getUsers(searchterm)
    .then(function success(users){
      if(users){
        $scope.people = users.data  
      }
    })
  }



})