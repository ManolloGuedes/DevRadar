const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

require('dotenv/config');

const app = express();
const server = http.Server(app); //isolating the http protocol to use socket and http requests

setupWebSocket(server);

mongoose.connect(process.env.DB_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);