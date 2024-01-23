# DappLooker Node.js Express Project

Welcome to the DappLooker Node.js Express project! This project serves as the backend for interacting with the DappLooker API and provides a set of powerful RESTful APIs to fetch and process data.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm - Node Package Manager)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended code editor)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/naziranwer/ELT-APP
   
2. Install dependencies:
   npm install

3. Start the server:
   nodemon index.js
   The server will be running on http://localhost:3000.

## Project Structure

The project follows an MVC (Model-View-Controller) architecture for a clean and organized codebase:

controllers: Contains the API controllers for handling HTTP requests.

models: Houses the data model responsible for fetching and processing data.

routes: Defines the Express routes and connects them to the corresponding controllers.

views: Placeholder for any future views (not used in this API-only project).

index.js: Entry point for the Express application.

## Features

### 1. API Endpoints

GET /api/tables: Retrieve all valid tables from the DappLooker JSON data.

GET /api/average-gas-price: Get the average gas price of transactions.

GET /api/transactions-per-block: Get the number of transactions per block.

PUT /api/transform-transactions: Transform the JSON structure and return recent 10 transactions.

GET /api/block-details: Get details for each block, including timestamp, average gas price, and number of transactions.

GET /api/block-details/:blockNumber: Get timestamp and number of transactions for a specific block.

### 2. MVC Structure

The project implements a Model-View-Controller structure for better organization and maintainability.

### 3. Axios Integration

Utilizes Axios for making HTTP requests to fetch data from the DappLooker API.

## Usage

Explore the powerful APIs by making requests to the specified endpoints. Check the API responses and adjust your application logic accordingly.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.