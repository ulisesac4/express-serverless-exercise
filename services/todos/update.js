const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (id, name, status, dueDate, notes) => {
  const params = {
    TableName: "TODOS",
    Key: {
      id: id,
    },
    UpdateExpression: "set",
    ExpressionAttributeValues: {},
    ExpressionAttributeNames: {},
  };

  if (name) {
    params.UpdateExpression += " #name = :name, ";
    params.ExpressionAttributeValues[":name"] = name;
    Object.assign(params.ExpressionAttributeNames, { "#name": "name" });
  }

  if (status) {
    params.UpdateExpression += " #status = :status, ";
    params.ExpressionAttributeValues[":status"] = status;
    Object.assign(params.ExpressionAttributeNames, { "#status": "status" });
  }

  if (dueDate) {
    params.UpdateExpression += " #dueDate = :dueDate, ";
    params.ExpressionAttributeValues[":dueDate"] = dueDate;
    Object.assign(params.ExpressionAttributeNames, { "#dueDate": "dueDate" });
  }

  if (notes) {
    params.UpdateExpression += " #notes = :notes, ";
    params.ExpressionAttributeValues[":notes"] = notes;
    Object.assign(params.ExpressionAttributeNames, { "#notes": "notes" });
  }

  params.UpdateExpression = params.UpdateExpression.slice(0, -2);

  return DynamoDb.update(params).promise();
};
