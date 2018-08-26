var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('draw', function(data){
    io.emit('draw', data);
  });

  socket.on('clear', function(){
    io.emit('clear');
  });
});

http.listen(4000, function(){
  console.log('Digital Signature Server Running on http://10.85.30.133:4000');
});
