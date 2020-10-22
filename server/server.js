const express = require('express');
const app = express();
let http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('server.js ready');
});

io.on('connection', (socket) => {

    socket.on('connected', () => {
        console.log("A user connected");
    });

});