const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors')

// const { Server } = require("socket.io");

const { Server } = require("socket.io");
// const io = new Server(server);


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const db = require('./app/models/conncetDB')
// db()
app.use(cors());
const io = new Server(server, {
    cors: {
      origin: true,
      methods: ['GET', 'POST'],
    },
  });

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on("connection", (socket) => {
    console.log('user connect');
    socket.on("hello", (data) => {
        io.emit("hello",data);
      console.log(data); // world
    });
  });

require('./app/routes/saveData.route')(app)
server.listen(3000, () => {
  console.log('listening on *:3000');
});