var request = require('request');

const steamKey = "51AB4090329A61410CA55FB77060FEC1";
const dotaAPI = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/";


module.exports = {
    recentDotaGames: (req, res) => {
        request({
            url: dotaAPI,
            qs: {
                key: steamKey
            }
        }, function(err, response, body) {
            var jsonResponse = JSON.parse(body);
            res.send(jsonResponse);
        })
    }
}