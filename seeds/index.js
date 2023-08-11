const seedposts=require("./post-seeds.js")
const seedusers=require("./user-seeds.js")
const sequelize=require("../config/connection.js")
const { strictEqual } = require("assert")

const seedall=async ()=>{
    await sequelize.sync({force:true})
    console.log("databasesynced")
    await seedusers()
    console.log("usersseeded")
    await seedposts()
    console.log("postseeded")
    process.exit(0)


}
seedall()