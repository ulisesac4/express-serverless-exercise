const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (id) => {
  return DynamoDb.get({
    TableName: "TODOS",
    Key: {
      id,
    },
  }).promise();
};
