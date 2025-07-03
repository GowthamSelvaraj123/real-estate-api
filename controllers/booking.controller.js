const Booking = require("../models/booking.model");

const createBooking = async(req, res) => {
    try{
        const booking = new Booking({ ...req.body, user: req.user.id });
        await booking.save();
        res.staus(200).json({ success: true, message: "Agent created Successfully", data:booking })
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Agent creation failed", err }) 
    }
}

const getBookings = async(req, res) => {
    try{
        const list = await Booking.find({ user: req.user.id }).populate("property");
        res.staus(200).json({ success: true, message: "Agent created Successfully", data:list })
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Agent creation failed", err }) 
    }
}

module.exports = {createBooking, getBookings}