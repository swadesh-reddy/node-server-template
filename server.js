const app = require("./app");
const { PORT } = require("./configs");
require('dotenv').config()
const config = require("./config")
const mongoose = require("mongoose");

app.listen(PORT, () => {
    console.log("server started")
})
console.log(config.mongoose.url)
mongoose.connect(config.mongoose.url, config.mongoose.p);

mongoose.connection.on('connected', () => { console.log("connected") })

mongoose.connection.on('error', (error) => { console.log(error) });