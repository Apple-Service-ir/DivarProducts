const Product = require("../models/Product")
const Picture = require("../models/Picture")

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}

const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

const get = async (req, res) => {
    const products = await Product.findAll({where : {status : "new"}})
    const pictures = await Picture.findAll()
    
    let s = []

    const start = async () => {
        await asyncForEach(products, async (p) => {
          await waitFor(50);
        const pic = pictures.find(a => a.productId == p.id)
          s.push({
            id : p.id,
            picture : (pic && pic.url) ? pic.url : "",
            title : p.title,
            price : p.price,
            link : p.link,
            isProductSalesByShop : p.isProductSalesByShop,
            status : p.status
          })
        });
      }
      start().then(() => {
        res.render("index", {
            flash : req.flash(),
            products : s,
            pictures
        })
      });

}

const post = (req, res) => {

}

module.exports = {
    get, 
    post
}