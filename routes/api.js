const epxress = require("express")
const Router = new epxress.Router()

const productUpdateController = require("../controllers/products/productUpdateController.js")
Router.post("/products/update", productUpdateController.post)

const productAcceptedController = require("../controllers/products/productAccepted.js")
Router.post("/products/accept", productAcceptedController.post)

const productRejectedController = require("../controllers/products/productRejected.js")
Router.post("/products/reject", productRejectedController.post)

module.exports = Router