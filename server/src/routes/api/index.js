const express = require("express");

const router = express.Router();

router.use("/emojis", require("./emojis"));
router.use("/votes", require("./votes"));

module.exports = router;