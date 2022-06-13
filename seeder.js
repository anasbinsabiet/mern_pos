const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const itemModel = require("./models/itemModel");
const items = require("./utils/data");
require("colors");
dotenv.config();
connectDb();

const importData = async () => {
    try {
        await itemModel.deleteMany();
        const itemsData = await itemModel.insertMany(items);
        console.log("All items added");
        process.exit(1);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

importData();