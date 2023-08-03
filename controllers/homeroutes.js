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
router.get("/posts/:id",async (req,res)=>{
    try{
        const data=await Post.findByPk(req.params.id,{
            include:[
                User,
                {
                    model:Comment,
                    include:[User],
                }
            ]
        })
        if(data){
            const post=data.get({plain:true})
            res.render("onepost",{post})

        }    else{
            res.status(404).end()
        }
    }catch(err){
        res.status(500).json(err)

    }
})

router.get("/login",(req,res)=>{
    if(req.session.loggedIn){
        res.redirect("/")
        return
    }
    res.render("login")
})

router.get("/signup",(req,res)=>{
    if(req.session.loggedIn){
        res.redirect("/")
        return
    }
    res.render("signup")
})

module.exports=router