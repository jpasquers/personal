// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const dotaAPI = require('./controllers/dotaHistoryAPI')

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '../public/dist')));
app.use('/imgs', express.static(path.join(__dirname, '../public/static/imgs')))

app.get('/mostRecentGame/Dota', dotaAPI.mostRecentDotaGame);

app.get('/recentGames/Dota', dotaAPI.recentDotaGames);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = 8082;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log("listening on port " + port);
})