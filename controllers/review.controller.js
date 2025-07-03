const Review = require("../models/review.model");

const createReview = async(req, res) => {
    try{
        const review = new Review({ ...req.body, user: req.user.id });
        await review.save();
        res.staus(200).json({ success: true, message: "Agent created Successfully", data:review})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Agent creation failed", err }) 
    }
}

const getReviews = async(req, res) => {
    try{
        const reviews = await Review.find({ property: req.params.propertyId }).populate("user", "name");
        res.staus(200).json({ success: true, message: "Agent created Successfully", data:reviews})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Agent creation failed", err }) 
    }
}

module.exports = {createReview, getReviews};