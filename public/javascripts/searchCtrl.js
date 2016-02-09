myApp.controller('searchCtrl',function($scope,usrSvc,store){
  
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

  $scope.addFriend = function(friend){
    usrSvc.addFriend(store.getId,friend._id)
    console.log(friend)

  }



})