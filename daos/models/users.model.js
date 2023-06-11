const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
})

const Users = mongoose.model("User", UsersSchema)

module.exports = User;