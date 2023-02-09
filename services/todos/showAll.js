const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (status) => {
  let params = {
    TableName: "TODOS",
  };

  if (status) {
    params.FilterExpression = "#status = :status";
    params.ExpressionAttributeValues = {
      ":status": status,
    };
    params.ExpressionAttributeNames = {
      "#status": "status",
    };
  }

  return DynamoDb.scan(params).promise();
};
