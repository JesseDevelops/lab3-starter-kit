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

    socket.on('student-registered', (data) => {
        console.log("A student has been registered", data);

        io.emit('student-registered', {id: socket.id, studentName: data.studentName});
    });
});

http.listen(3000, () => {
    console.log('server.js ready');
});
