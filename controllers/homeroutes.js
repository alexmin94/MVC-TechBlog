const router = require('express').Router();
const {Post,Comment,User}=require("../models/")
router.get("/",async (req,res)=>{
    try{
        const data=await Post.findAll({
            include:[User]
        
        })
        const posts=data.map((post)=>post.get({plain:true}))
        res.render("userposts",{posts})

    }catch(err){
        res.status(500).json(err)

    }
})