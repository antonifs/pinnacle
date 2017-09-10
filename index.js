//main startung points
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const Tesaja = require('./models/tesaja');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const mongoose = require('mongoose');

const cors = require('cors');

// DB
mongoose.connect('mongodb://localhost:auth/auth');
// Tesaja.sync({force: true});

// app setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// server
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
