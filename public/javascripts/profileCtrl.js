myApp.controller('profileCtrl',function($scope,store,$state, usrSvc){
  // stop people getting access to this page if no JWT is stored
  if(!store.getToken){
    $state.go('home')
  }
  
})