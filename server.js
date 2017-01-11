var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  haikuRoutes = require('./routes/haikus.js'),
  ejsLayouts = require("express-ejs-layouts")

mongoose.connect('mongodb://localhost/haiku-hub', (err) => {
  console.log(err || "Connected to MongoDB (haiku-app)")
})

//Configure EJS to use in your application
app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

// middleware (will run after a request, but before response):
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// Configure paths to add the public path folder of the static assets.
app.use(express.static(__dirname + "/public"));
app.use(ejsLayouts)


//root
app.get('/', (req, res) => {
  res.render("index")
})

// All routes will have /haikus as NAMESPACE. All routes will used a prefix.
app.use('/haikus', haikuRoutes)

app.listen(3000, (err) => {
  console.log(err || "Server running on 3000. Boom.")
})
