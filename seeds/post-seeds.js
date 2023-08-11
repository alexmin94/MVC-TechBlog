const {Post}=require("../models")
const postData=[
    {
        title:"this is a post about stuff",
        body:"Hey tech enthusiasts! 🌟 Get ready to have your minds blown because I've just experienced the most mind-boggling tech upgrade EVER"
    },
    {
        title:"this is another post about stuff",
        body:"Introducing the NeuraSwift X9 Quantum Pro – the ultimate fusion of cutting-edge innovation and sheer awesomeness"
    },
    {
        title:"this is another post about some more stuff",
        body:"🔮 Holographic AI Display: Say goodbye to boring old screens! The NeuraSwift X9 projects holographic images right into your field of view"
    }
]

const seedposts=()=>Post.bulkCreate(postData)
module.exports=seedposts