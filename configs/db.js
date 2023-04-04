const sequelize = require("sequelize"); 
const config = require("./config.json");  
const db = new sequelize(config.database.name, config.database.user, config.database.password, {     
    host : "localhost",     
    dialect : "mysql", 
});  
try{
    db.authenticate();     
    console.log("[RUN] Database is running"); 
}catch (e){
    console.log("[RUN] DataBase connection error", e); 
}  
module.exports = db;
