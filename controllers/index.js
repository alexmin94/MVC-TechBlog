const router = require('express').Router();

var apiroutes=require("./api/")
var homeroutes=require("./homeroutes.js")
var loggedinroutes=require("./loggedinroutes.js")

router.use("/",homeroutes)
router.use("/loggedin",loggedinroutes)
router.use("/api",apiroutes)

module.exports=router