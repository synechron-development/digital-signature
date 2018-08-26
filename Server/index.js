var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('draw', function (data) {
    io.emit('draw', data);
  });

  socket.on('clear', function () {
    io.emit('clear');
  });
});

http.listen(4000, function () {
  console.log('Digital Signature Server Running on http://10.85.30.133:4000');
});







var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/message', function (req, res) {
  var number = req.body.number;
  var loc = req.body.loc;


// Twilio Credentials
const accountSid = 'AC18222690fa4ea24ffa00d60d807bea68';
const authToken = '41f841c1e875d833b4781445e0cb285b';
const client = require('twilio')(accountSid, authToken);
console.log('sending message')
client.messages.create({
    to: '+971507021612',
    from: '+8049252205',
    body: "Click here to sign",
    mediaUrl: loc,
  })
  .then((message) => {console.log('message sent' + message.sid);res.end("yes");});



  
});