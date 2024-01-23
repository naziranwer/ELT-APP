const dataModel = require('../models/dataModel');

const apiController = {
  getAllTables: async (req, res) => {
    try {
      const jsonData = await dataModel.fetchData();
      console.log(jsonData);
      const tables = dataModel.getValidTables(jsonData.__schema.types);
      res.json(tables);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAverageGasPrice: async (req, res) => {
    try {
      const jsonData = await dataModel.fetchData();
      const averageGasPrice = dataModel.calculateAverageGasPrice(jsonData);
      res.json({ averageGasPrice });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getTransactionsPerBlock: async (req, res) => {
    try {
      const jsonData = await dataModel.fetchData();
      const transactionsPerBlock = dataModel.getTransactionsPerBlock(jsonData);
      res.json({ transactionsPerBlock });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  transformTransactions: async (req, res) => {
    try {
      const jsonData = await dataModel.fetchData();
      const transformedTransactions = dataModel.transformTransactions(jsonData);
      res.json(transformedTransactions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getBlockDetails: async (req, res) => {
    try {
      const jsonData = await dataModel.fetchData();
      const blockDetails = dataModel.getBlockDetails(jsonData);
      res.json(blockDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getBlockInfo: async (req, res) => {
    try {
      const jsonData = await dataModel.fetchData();
      const blockNumber = parseInt(req.params.blockNumber);
      const blockInfo = dataModel.getBlockInfo(jsonData, blockNumber);
      res.json(blockInfo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = apiController;
