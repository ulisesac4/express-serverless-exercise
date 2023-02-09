const AWS = require("./aws-instance");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDb;
