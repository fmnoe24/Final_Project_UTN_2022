const path = require("path");
const express = require("express");

const router = express.Router();

/*const client = path.resolve(__dirname + "/../../../../client");
console.log(client)*/

const client = require("../../client");

router.use(express.static(client));

module.exports = router;