const express = require('express');
const app = express();
let http = require('http').Server(app);
let io = require('socket.io').listen(http);

app.use(express.json());
app.use(express.static(__dirname + '/public/'));

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log("A user disconnected");
    });
});

http.listen(3000, () => {
    console.log('server.js ready');
});
