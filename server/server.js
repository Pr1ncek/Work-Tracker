const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

// Mlab Setup
mongoose.connect(
  'mongodb://prince794:password1@ds133271.mlab.com:33271/work-tracker-application',
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MLab connected!');
});

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server is running ...');
});
