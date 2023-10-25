require("dotenv").config();
const fs = require("fs");
const YAML = require("yaml");
const swaggerUi = require("swagger-ui-express");
const file = fs.readFileSync("./src/docs/swagger.yml", "utf8");
const apiDocs = YAML.parse(file);
const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("./utils/response.js");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", swaggerUi.serve);
app.get("/", swaggerUi.setup(apiDocs));

app.listen(process.env.PORT, () => {
  try {
    console.log("server is running");
  } catch (err) {
    console.log(err);
  }
});
