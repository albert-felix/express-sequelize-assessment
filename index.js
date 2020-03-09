const express = require("express");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname,"./views/layouts"),
  partialsDir: path.join(__dirname,"./views/partials")
});

app.engine(".hbs",hbs.engine);
app.set("view engine",".hbs");
app.set("views",path.join(__dirname,"./views"));

app.use(bodyParser.json());



app.get("/", (req,res) => {
  res.render("home",{
    layout: "hero",
    pageTitle: "Student Details"
  });
});


const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
