var jwt = require('express-jwt');

module.exports = jwt({secret: SUPER_SECRET, userProperty: "payload"})