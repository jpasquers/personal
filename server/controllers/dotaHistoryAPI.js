var request = require('request');
var fs = require('fs');

const steamKey = "51AB4090329A61410CA55FB77060FEC1";
const gameAPI = "https://api.opendota.com/api";
const gameHistoryAPI = gameAPI + "/players/86606128/recentMatches";
//const heroList = JSON.parse("../static/heroList.json");

module.exports = {
    recentDotaGames: (req, res) => {
        request({
            url: gameHistoryAPI,
            qs: {
                key: steamKey
            }
        }, (err, response, body) => {
            var matchList = JSON.parse(body);
            res.send(matchList);
        })
    },

    mostRecentDotaGame: (req, res) => {
        request({
            url: gameHistoryAPI,
            qs: {
                key: steamKey,
                matches_requested:1
            }
        }, (err, response, body) => {
            var matchList = JSON.parse(body);
            var mostRecentMatch = matchList[0];
            supplementMatchStats(mostRecentMatch, (updatedMatch) => {
                res.send(updatedMatch);
            });
        })
    }
}

supplementMatchStats = (match, sucFn) => {
    fs.readFile("./static/heroList.json", 'utf8', (err,data) => {
        console.log(match);
        var heroList = JSON.parse(data);

        var selectedHero = heroList.find((hero) => {
            return hero.id == match.hero_id;
        });
        
        var heroName = selectedHero.name;
        var heroLocalizedName = selectedHero.localized_name;

        match.heroLocalizedName = heroLocalizedName;
        match.heroName = heroName;
        sucFn(match);

    });
}