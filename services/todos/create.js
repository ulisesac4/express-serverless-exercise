const { uuid } = require("uuidv4");
const DynamoDb = require("../../helpers/dynamodb-instance");

module.exports = async (name, status, dueDate, notes) => {
  const id = uuid();
  const element = DynamoDb.put({
    Item: {
      id,
      dueDate,
      status,
      name,
      notes,
    },
    TableName: "TODOS",
  }).promise();

  return id;
};
