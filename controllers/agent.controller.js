const Agent = require("../models/agent.model")

const createAgent = async(req, res) => {
    try{
        const agent = new Agent(req.body);
        await agent.save();
        res.staus(200).json({ success: true, message: "Agent created Successfully", data:agent })
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Agent creation failed", err })
    }
}

const getAgents = async(req, res) => {
    try{
        const agents = await Agent.find().populate('user', "name email")
        res.staus(200).json({ success: true, message: "Agents get Successfully", data:agents })
    }
    catch(err)
    {
        res.staus(500).json({ success: true, message: "Agents get failed", err:err.message })
    }
}

module.exports = {createAgent, getAgents}