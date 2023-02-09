const serverlessExpress = require("@vendia/serverless-express");
const app = require("./app/app");
exports.handler = serverlessExpress({ app });
