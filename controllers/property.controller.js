const Property = require("../models/property.model");

const createProperty = async(req, res) => {
    try{
        const property = new Property({...req.body, listedBy:req.user.id})
        property.save();
        res.staus(200).json({ success: true, message: "Property created Successfully", data:property})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Property created failed", data:inquiry})
    }
}
const getProperties = async(req, res) => {
    try{
        const properties = await Property.find().populate("listedby", "name");
        res.staus(200).json({ success: true, message: "Property created Successfully", data:properties})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Property created failed", data:inquiry})
    }
}
const updateProperty = async(req, res) => {
    try{
        const updated = await Property.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.staus(200).json({ success: true, message: "Property created Successfully", data:updated})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Property created failed", data:inquiry})
    }
}
const deleteProperty = async(req, res) => {
    try{
        await Property.findByIdAndDelete(req.params.id);
        res.staus(200).json({ success: true, message: "Property created Successfully", data:property})
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Property created failed", data:inquiry})
    }
}

module.exports = {createProperty, getProperties, deleteProperty, updateProperty}
