const Product = require("../../models/Product")
const Picture = require("../../models/Picture")
const axios = require("axios")

const post = async (req, res) => {
    await axios.post("http://127.0.0.1:5000/divar", {}).then(result => {
        if(result && result.data && result.data[0]){
            result.data.forEach(async data => {
                const isProductOld = await Product.findOne({where : {title : data.title}})
                if(!isProductOld){

                    Product.create({
                        title : data.title,
                        price : data.price,
                        link : data.link,
                        pictures : "",
                        isProductSalesByShop : data.isProductSalesByShop,
                        status : "new"
                    }).then((dbRes) => {
                        data.pictures.forEach(singlePicture => {
                            Picture.create({
                                productId : dbRes.id,
                                url : singlePicture
                            })
                        })
                    })
                    
                }
            })
            res.send(true)
        }else{
            res.send(false)
        }
    })
}

module.exports = {
    post
}