const Wishlist = require("../models/wishlist.model");

const addToWishlist = async (req, res) => {
    try {
        const wish = new Wishlist({ user: req.user.id, property: req.body.property });
        await wish.save();
        res.staus(200).json({ success: true, message: "Agent created Successfully", data: agent })
    }
    catch (err) {
        res.staus(500).json({ success: true, message: "Agent creation failed", err })
    }
}
const getWishlist = async (req, res) => {
    try {
        const list = await Wishlist.find({ user: req.user.id }).populate("property");
        res.staus(200).json({ success: true, message: "Agent created Successfully", data: agent })
    }
    catch (err) {
        res.staus(500).json({ success: true, message: "Agent creation failed", err })
    }
}

module.exports = { addToWishlist, getWishlist }
