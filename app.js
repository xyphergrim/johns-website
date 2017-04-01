var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    app         = express();
    
// mongoose.connect("mongodb://localhost/johns_website");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public")); // for our custom app.css
app.use(express.static(__dirname + "/models")); // for our custom js files
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home", {page: "home"});
});

app.get("/services", function(req, res){
    res.render("services", {page: "services"});
});

app.get("/portfolio", function(req, res){
    res.render("portfolio", {page: "portfolio"});
});

app.get("/about", function(req, res){
    res.render("about", {page: "about"});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("JPC WebDev Server Started");
});