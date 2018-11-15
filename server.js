const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/todolistnew', {useNewUrlParser: true});

require('./routes/api-routes')(app);

server.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
});