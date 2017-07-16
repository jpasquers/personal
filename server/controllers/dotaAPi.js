var request = require('request');

const steamKey = "51AB4090329A61410CA55FB77060FEC1";
const gameHistoryApi = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/";
const heroList = JSON.parse("../static/heroList.json");

module.exports = {
    recentDotaGames: (req, res) => {
        request({
            url: gameHistoryApi,
            qs: {
                key: steamKey
            }
        }, function(err, response, body) {
            var jsonResponse = JSON.parse(body);
            res.send(jsonResponse);
        })
    }
}