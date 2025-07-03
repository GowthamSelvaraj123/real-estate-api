const User = require("../models/user.model");

const getAllUsers = async(req, res) => {
    try{
        const users = await User.find().select("-password");
        res.staus(200).json({ success: true, message: "User get Successfully", data:users })
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Get user failed", err })
    }
}

const getUser = async(req, res) => {
    try{
        const user = await User.findById(req.params.id).select("-password");
        res.staus(200).json({ success: true, message: "Get user successfully", data:user})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Get user failed", err })
    }
}

module.exports = {getAllUsers, getUser}