const router = require('express').Router();

var apiroutes=require("./api/")
var homeroutes=require("./homeroutes/")
var loggedinroutes=require("./loggedinroutes/")

router.use("/",homeroutes)
router.use("/loggedinroutes",loggedinroutes)
router.use("/api",apiroutes)

module.exports=router