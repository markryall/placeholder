var express     = require('express')
var app         = express();
var compression = require('compression');
var morgan      = require('morgan');

var staticPath  = __dirname + '/public/';

app.set('port', (process.env.PORT || 5000))
app.use(morgan('combined'));
app.use(compression());

function sendStaticFile(name) {
  return function (_, res) {
    res.sendfile(staticPath + name);
  };
}

app.use(express.static(staticPath));
app.get('/', sendStaticFile('index.html'));

app.listen(app.get('port'), function() {
  console.log("running at localhost:" + app.get('port'))
});
