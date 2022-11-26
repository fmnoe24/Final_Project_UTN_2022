const emojis = require("../models/emojis");

module.exports.vote = async function(req, res){
    console.log("vote function");

    const {id} = req.params;

    try {
        const emoji = await emojis.findByIdAndUpdate(id,{
            $inc:{
                vote: 1
            }
        })

        res.json({
            result: emoji,
        })
    }catch(error){
        res.json({
            errors: [{
                message: error.message
            }]
         })
    }

}