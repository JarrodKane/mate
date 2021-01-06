import path from 'path';
import http from 'http';
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(); //creates a new web server

const io = socketio(server);

// app.use(require('cors')());

const port = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', () => {
    console.log(`New websocket connection`);
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
