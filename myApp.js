var express = require('express');
var app = express();
const bodyParser = require('body-parser')

/*app.get("/", (req, res) => {
  res.send("Hello Express");
});*/

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/name', (req, res) => {
   res.json({name: `${req.body.first} ${req.body.last}`
  })
});

app.use(function middleware(req, res, next) {
  // Do something
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/name', (req, res) => {
  res.json({name: `${req.query.first} ${req.query.last}`
  })
})

app.get('/:word/echo', (req, res) => {
  res.json({echo: req.params.word})
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
    res.send({time: req.time})
});

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
     return res.json({"message": "HELLO JSON"});
  } else {
    return res.json({"message": "Hello json"});
  }
});
  

console.log("Hello World" );


































 module.exports = app;
