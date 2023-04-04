const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Picture = db.define("pictures", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    productId : {
        type : DataTypes.TEXT
    },

    url : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Picture