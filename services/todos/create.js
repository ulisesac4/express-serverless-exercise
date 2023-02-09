const { uuid } = require("uuidv4");
const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (name, status, dueDate, notes) => {
  return DynamoDb.put({
    Item: {
      id: uuid(),
      dueDate,
      status,
      name,
      notes,
    },
    TableName: "TODOS",
  }).promise();
};
