const express = require("express");
const config = require("./configs/config.json");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(flash());
app.use(cookieParser());
app.use(session({secret: config.app.secret}));
app.use(express.static(__dirname + "/public"));
app.use(morgan("combined"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const routes = require("./routes");
app.use("/", routes);

const APIs = require("./routes/api")
app.use("/api", APIs)

app.listen(config.app.port, () => {
  console.log(`Server is running on ${config.app.port}`);
});