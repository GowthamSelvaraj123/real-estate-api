const Visit = require("../models/visit.model")

const scheduleList = async(req, res) => {
    try{
        const visit = new Visit({ ...req.body, user: req.user.id });
        await visit.save();
        res.staus(200).json({ success: true, message: "Scheule list successfully", data:agent })
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Fetch data failed", err })
    }
}

const getUserVisits = async(req, res) => {
    try
    {
        const visits = await Visit.find({ user: req.user.id }).populate("property agent");
        res.staus(200).json({ success: true, message: "Scheule list successfully", data:agent })
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Fetch data failed", err })
    }
}

module.exports = {getUserVisits, scheduleList};
