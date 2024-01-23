const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/tables', apiController.getAllTables);
router.get('/average-gas-price', apiController.getAverageGasPrice);
router.get('/transactions-per-block', apiController.getTransactionsPerBlock);
router.put('/transform-transactions', apiController.transformTransactions);
router.get('/block-details', apiController.getBlockDetails);
router.get('/block-details/:blockNumber', apiController.getBlockInfo);

module.exports = router;
