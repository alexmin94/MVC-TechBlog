const router = require('express').Router();

const userroutes = require("./userroutes.js");
const postroutes = require("./postroutes.js")
const commentroute = require("./commentroutes.js")

router.use("/user",userroutes)
router.use("/post",postroutes)
router.use("/comment",commentroute)

module.exports=router