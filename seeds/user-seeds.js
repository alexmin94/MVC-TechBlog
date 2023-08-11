const {User}=require("../models")
const userData=[
    {
        username:"dill",
        password:"dillpickle123"
    },
    {
        username:"comp",
        password:"mymouse123"
    },
    {
        username:"fast",
        password:"fastcar123"
    }
]

const seedusers=()=>User.bulkCreate(userData)
module.exports=seedusers