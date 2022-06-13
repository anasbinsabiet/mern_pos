const express = require('express');
const {addBillsController, getBillsController} = require("../controllers/billsController");

const router = express.Router();

router.post('/add-bills', addBillsController);
router.get('/get-bills', getBillsController);

module.exports = router;