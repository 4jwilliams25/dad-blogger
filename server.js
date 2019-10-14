const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;
const knex = require("./db/knex");

users = require("./routes/users");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", users);

app.listen(port, () => console.log("Listening at port 8000..."));
