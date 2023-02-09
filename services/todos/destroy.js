const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (id) => {
  return DynamoDb.delete({ TableName: "TODOS", Key: { id } }).promise();
};
