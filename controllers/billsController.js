const billsModel = require("../models/billsModel");

const addBillsController = async (req, res) => {
    try {
        const newBill = new billsModel(req.body);
        await newBill.save();
        res.status(201).send("Bill created successfully");
    } catch (error) {
        res.send("Somethimg went wrong!");
        console.log(error);
    } 
};

const getBillsController = async (req, res) => {
    try {
        const bills = await billsModel.find();
        res.status(200).send(bills);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {addBillsController, getBillsController};