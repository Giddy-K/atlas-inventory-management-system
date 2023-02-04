const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add your name!"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        unique: true,
        trim: true,
         match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email-address!"
         ]
    },
    password: {
        type: String,
        required: [true, "Please add your password!"],
        minLength: [6, "Password must be up to 6 characters"],
        maxLength: [25, "Password must be up to 6 characters and not more than 25 characters"],
    },
    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
    },
     phone: {
        type: String,
        default: "+254"
    },
    bio: {
        type: String,
        default: "Bio",
        maxLength: [250, "Bio must be not more than 250 characters"],
    }

}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)
module.exports = User