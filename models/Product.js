const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Product = db.define("products", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    title : {
        type : DataTypes.TEXT
    },

    price : {
        type : DataTypes.TEXT
    },

    link : {
        type : DataTypes.TEXT
    },

    pictures : {
        type : DataTypes.TEXT
    },

    isProductSalesByShop : {
        type : DataTypes.BOOLEAN
    },

    status : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Product