const express = require("express")
const Router = express.Router()

const indexController = require("../controllers/indexController")
Router.get("/", indexController.get)
Router.post("/", indexController.post)

module.exports = Router