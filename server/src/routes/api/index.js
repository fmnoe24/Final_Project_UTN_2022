const express = require("express");

const router = express.Router();

router.use("/emojis", require("./emojis"));
router.use("/votes", require("./votes"));
router.use((req, res)=>{
    res.status(404).json({
        errors:[{
            message: "Not Found"
        }]
    })
});


module.exports = router;