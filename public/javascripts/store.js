myApp.factory('webToken',function(){
  return {
    getToken : "",
    setToken: function(token) {
      this.getToken = token.data
    }
  }
})