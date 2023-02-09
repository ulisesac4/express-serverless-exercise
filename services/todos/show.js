const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (id) => {
  return DynamoDb.get({
    TableName: "TODOS",
    Key: {
      id,
    },
    ProjectionExpression: "ATTRIBUTE_NAME",
  }).promise();
};
