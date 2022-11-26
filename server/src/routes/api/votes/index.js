const express = require("express");

const router = express.Router();

const {vote} = require("../../../controllers/vote");

router.post("/:id", vote)

module.exports = router;