const fs = require('fs');

refreshToken = (succFn,errFn) => {
    fs.readFile("../config/keys.json", 'utf8', (err,data) => {

        if (err) errFn();

        var keys = JSON.parse(data);
        console.log(keys);
        var refresh_token = keys.spotify_refresh_token;
        var cli_id = keys.spotify_client_id;
        var cli_secret = keys.spotify_client_secret;

        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: { 
                'Authorization': 'Basic ' 
                    + (new Buffer(cli_id 
                    + ':' + cli_secret).toString('base64')) },
            form: {
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            },
            json: true
        }

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var access_token = body.access_token;
                succFn(access_token);
            }
        });

    });
}

module.exports = {
    getCurrentlyPlaying: (req,res) => {
        refreshToken((access_token) => {
            var options = {
                url: 'https://api.spotify.com/v1/me/player/currently-playing',
                headers: { 'Authorization': 'Bearer ' + access_token },
                json: true
            };

            request.get(options, function(error, response, body) {
                var song = JSON.parse(body);
                res.send(song);
            });
        }, (err) => {

        });
    }
}