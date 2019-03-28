const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config/config");

const app = express();

//Router initialize
const router = require("./routers/router");
//Helpers
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());

// Routers
app.use(router);

// Start server
app.listen(config.port, () =>
    console.log("\u2705  Server running on port " + config.port)
);