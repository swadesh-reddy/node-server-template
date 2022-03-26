const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const userroute = require("./routes/user")
var cfenv = require("cfenv")
const swaggerDefinition = require("./swaggerDefination");
const swaggerui = require("swagger-ui-express")

const appEnv = cfenv.getAppEnv();
const basePath = "/api";
const host = appEnv.url.split('://')[1];

let schemes = ['https'];
if (host.includes('localhost')) {
    schemes = ['http'];
}
const port = appEnv.port || 3000;

const specs = swaggerDefinition(appEnv, basePath, schemes)

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json({ extended: true }));
app.use(cors());

// Initialize Swagger UI.  This route doesn't use the basepath because it is not a resource of the API.
app.use('/api-docs', swaggerui.serve, swaggerui.setup(specs));

app.use('/users', userroute);
app.get("/", (req, res) => {
    res.json({ "message": "test route" })
})
module.exports = app