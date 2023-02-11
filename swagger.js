const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todos",
      version: "1.0.0",
    },
  },
  apis: ["./controllers/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);

fs.writeFile(
  "dist/swagger.json",
  JSON.stringify(openapiSpecification),
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
//writeJsonFile("dist/docs/swagger.json", openapiSpecification);
