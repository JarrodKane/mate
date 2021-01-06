import path from 'path';
import http from 'http';
import express from 'express';
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app); //creates a new web server
const io = socketio(server); //socketio requires a server passed to it

const port = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', () => {
    console.log(`New websocket connection`);
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
