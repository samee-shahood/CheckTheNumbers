
//io.on('connection', function(socket){
//});

// server.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 


var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var teamDataSchema = new Schema({
  name: String,
  team: Array
}, {collection: 'team-data'});

var teamData = mongoose.model('TeamData', teamDataSchema);

var teamDataArray;

teamData.find()
.then(function(doc){
  //console.log({items: doc})
  teamDataArray = {items: doc};
  console.log(teamDataArray);
  console.log(teamDataArray.items[1].team[1]);
});

app.use(express.static(__dirname + '/public')); 
//redirect / to our index.html file

app.get('/', function(req, res,next) {  
  res.sendFile(__dirname + '/public/index.html');
});


//app.get('/ezz', function(req, res,next) {  
 //   res.sendFile(__dirname + '/public/ezz.html');
//});

io.on('connection', function(client) {  
  client.emit('getTeamData', teamDataArray);
  console.log('user connected');

  client.on('sendSkaterStats', function(data){
    console.log(data);
  });

});

//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
});