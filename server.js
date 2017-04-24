var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

console.log('server.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

console.log('set up app');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

console.log('set up handlebars');

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

console.log('set up routes');

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
