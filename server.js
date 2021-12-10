const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(8888);
const io = require('socket.io')(server);
var counter = 0;

app.set( 'views', __dirname + '/public' );
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/publicc"));


app.get('/', function( request, response ){
	response.render( 'index' ); 
});



let prev = []


io.on("connection", function (socket) {
    console.log("Someone connected!");
    socket.emit('display', prev);
    
    socket.on("information", function (info) {
        prev.push(info);
        io.sockets.emit('msj', info);
    });
});

