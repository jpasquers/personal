const fs = require('fs');
const request = require('request');
const path = require('path');
const TokenManager = require('../models/tokenManager');

getToken = (succFn,errFn) => {
    if (TokenManager.getToken()) {
        succFn(TokenManager.getToken());
        return;
    }
    //token has expired, refresh by hitting endpoint with refresh token
    //first get refresh_token from our config file.
    var keyPath = path.join(__dirname, '..', '..', 'config', 'keys.json');
    fs.readFile(keyPath, 'utf8', (err,data) => {
        if (err) errFn();
        var keys = JSON.parse(data);
        var refresh_token = keys.spotify_refresh_token;
        var cli_id = keys.spotify_client_id;
        var cli_secret = keys.spotify_client_secret;

        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: { 
                'Authorization': 'Basic ' + (new Buffer(cli_id + ':' + cli_secret).toString('base64')) },
            form: {
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            },
            json: true
        }

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var access_token = body.access_token;
                TokenManager.setToken(access_token, body.expires_in);
                succFn(TokenManager.getToken());
            }
        });

    });
}

module.exports = {
    getCurrentlyPlaying: (req,res) => {
        getToken((access_token) => {
            var options = {
                url: 'https://api.spotify.com/v1/me/player/currently-playing',
                headers: { 'Authorization': 'Bearer ' + access_token },
                json: true
            };

            request.get(options, function(error, response, body) {
                var song = body.item
                res.send(song);
            });
        }, (err) => {
            //TODO
        });
    },

    getTopArtists: (req, res) => {
        getToken((access_token) => {
            var options = {
                url: 'https://api.spotify.com/v1/me/top/artists',
                headers: { 'Authorization': 'Bearer ' + access_token },
                json: true
            };
            request.get(options, function(error, response, body) {
                var artists = body.items;
                res.send(artists);
            });

        }, (err) => {
            //TODO
        });
    }
}
