myApp.factory('webToken',function(){
  return {
    getToken : false,
    setToken: function(token) {
      this.getToken = JSON.stringify(token) 
    }
  }
})