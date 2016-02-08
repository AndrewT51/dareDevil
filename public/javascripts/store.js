myApp.factory('store',function(){
  return {
    getToken : "",
    setToken: function(token) {
      this.getToken = token.data
    }
  }
})