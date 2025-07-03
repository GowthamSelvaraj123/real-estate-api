const Inquire = require("../models/inquiry.model");

const sendInquiry = async(req, res) => {
    try{
        const inquiry = new Inquire(req.body);
        await inquiry.save();
        res.staus(200).json({ success: true, message: "Inquiry created Successfully", data:inquiry})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Inquiry creation failed", err })
    }
}

module.exports = {sendInquiry};
