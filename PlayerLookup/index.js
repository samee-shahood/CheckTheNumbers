var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 

app.use(express.static(__dirname + '/public')); 
//redirect / to our index.html file

app.get('/', function(req, res,next) {  
  res.sendFile(__dirname + '/public/index.html');
});


//app.get('/ezz', function(req, res,next) {  
 //   res.sendFile(__dirname + '/public/ezz.html');
//});

io.on('connection', function(client) {  
    //client.emit('connected', 'gg');
});

//start our web server and socket.io server listening
server.listen(3100, function(){
  console.log('listening on *:3100');
});