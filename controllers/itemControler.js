const itemModel = require("../models/itemModel");
const getItemController = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.status(200).send(items);
    } catch (error) {
        console.log(error);
    }
};

const addItemController = async (req, res) => {
    try {
        const newItem = new itemModel(req.body);
        await newItem.save();
        res.status(201).send("Item created successfully");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
};

const editItemController = async (req, res) => {
    try {
        await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
        res.status(201).send("Item updated successfully");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
};

const deleteItemController = async (req, res) => {
    try {
        const { itemId } = req.body;
        await itemModel.findOneAndDelete({ _id: itemId });
        res.status(200).send("Item deleted successfully");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
};

module.exports = {getItemController, addItemController, editItemController, deleteItemController};