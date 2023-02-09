const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (id, name, status, dueDate, notes) => {
  const params = {
    TableName: "TODOS",
    Key: {
      id: id,
    },
    UpdateExpression: "set",
    ExpressionAttributeValues: {},
  };

  if (name) {
    params.UpdateExpression += " #name = :name, ";
    params.ExpressionAttributeValues[":name"] = name;
    params.ExpressionAttributeNames = {
      "#name": "name",
    };
  }

  if (status) {
    params.UpdateExpression += " #status = :status, ";
    params.ExpressionAttributeValues[":status"] = status;
    params.ExpressionAttributeNames = {
      "#status": "status",
    };
  }

  if (dueDate) {
    params.UpdateExpression += " #dueDate = :dueDate, ";
    params.ExpressionAttributeValues[":dueDate"] = dueDate;
    params.ExpressionAttributeNames = {
      "#dueDate": "dueDate",
    };
  }

  if (notes) {
    params.UpdateExpression += " #notes = :notes, ";
    params.ExpressionAttributeValues[":notes"] = notes;
    params.ExpressionAttributeNames = {
      "#notes": "notes",
    };
  }

  params.UpdateExpression = params.UpdateExpression.slice(0, -2);

  return DynamoDb.update(params).promise();
};
