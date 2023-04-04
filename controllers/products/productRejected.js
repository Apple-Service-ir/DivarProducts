const Product = require("../../models/Product")

const post = async (req, res) => {
    const findProduct = await Product.findOne({where : {id : req.body.id}})
    if(findProduct){
        findProduct.update({status : "rejected"}).then(() => {
            res.send(true)
        })
    }
}

module.exports = {post}