const usermModel = require("../models/userModel");
const loginController = async (req, res) => {
    try {
        const {userId, password} = req.body;
        const user = await usermModel.findOne({userId,password,verified: true});
        if(user) {
            res.status(200).send(user);
        }else{
            res.json({
                message: "Login Failed!",
                user,
            });
        }
        
    } catch (error) {
        console.log(error);
    }
};

const registerController = async (req, res) => {
    try {
        const newUser = new usermModel({...req.body, verified: true});
        await newUser.save();
        res.status(201).send("New User added successfully");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
};

module.exports = {loginController, registerController};