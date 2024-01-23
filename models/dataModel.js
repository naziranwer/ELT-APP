const axios = require('axios');

const dataModel = {
  fetchData: async () => {
    const response = await axios.get('https://api.dapplooker.com/chart/87596cde-e5df-4a5d-9e72-7592d4861513?api_key=4721550ec26a47cabbf1aa0609ab7de3&amp;output_format=json');
    return response.data;
  },

  getValidTables: (types) => {
    return types
      .filter(type =>
        type.entityDefinition &&
        type.entityDefinition.fields !== null &&
        type.entityDefinition.fields !== "" &&
        type.entityDefinition.fields !== undefined &&
        type.entityDefinition.fields.length > 0 &&
        !['exclude_entity1', 'exclude_entity2'].includes(type.entityDefinition.name.toLowerCase()) &&
        !type.entityDefinition.name.startsWith("_")
      )
      .map(type => type.entityDefinition.name);
  },

  calculateAverageGasPrice: (jsonData) => {
    // Assuming there is a 'gasPrice' field in each transaction object
    const gasPrices = jsonData.transactions.map(transaction => transaction.gasPrice);
    const totalGasPrices = gasPrices.reduce((acc, current) => acc + current, 0);
    const averageGasPrice = totalGasPrices / gasPrices.length;
    return averageGasPrice;
  },

  getTransactionsPerBlock: (jsonData) => {
    // Assuming there is a 'transactions' array in each block object
    return jsonData.blocks.map(block => block.transactions.length);
  },

  transformTransactions: (jsonData) => {
    // Assuming there is a 'transactions' array in the JSON data
    const recentTransactions = jsonData.transactions.slice(-10);
    return recentTransactions.map(transaction => ({
      // Include only necessary properties in each transaction
      hash: transaction.hash,
      from: transaction.from,
      to: transaction.to,
      value: transaction.value,
      // Add more properties as needed
    }));
  },

  getBlockDetails: (jsonData) => {
    // Assuming there is a 'blocks' array in the JSON data
    const blockDetails = jsonData.blocks.map(block => ({
      timestamp: block.timestamp,
      averageGasPrice: dataModel.calculateAverageGasPrice(block),
      numberOfTransactions: block.transactions.length,
    }));
    return blockDetails;
  },

  getBlockInfo: (jsonData, blockNumber) => {
    // Assuming there is a 'blocks' array in the JSON data
    const block = jsonData.blocks.find(b => b.number === blockNumber);
    if (!block) {
      return { error: 'Block not found' };
    }

    return {
      timestamp: block.timestamp,
      numberOfTransactions: block.transactions.length,
    };
  },
};

module.exports = dataModel;
