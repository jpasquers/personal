

var http = require('http')
  , fs = require('fs')

var imgUrl = "http://cdn.dota2.com/apps/dota2/images/heroes/"
var heroList = JSON.parse("../static/heroList.json");


buildRequest = (heroName, suffix, queryString) => {
    var request = http.get(imgUrl + queryString, function(res){
        var imagedata = ''
        res.setEncoding('binary')

        res.on('data', function(chunk){
            imagedata += chunk
        })

        res.on('end', function(){
            fs.writeFile('../static/imgs/' + queryString, imagedata, 'binary', function(err){
                if (err) throw err
                console.log('File saved.')
            })
        })

    })
}


for (var i=0; i< heroList.length; i++) {
    var hero = heroList[i];
    var heroName = hero.name.replace('npc_dota_hero','');
    var suff = "sb.png"
    queryString = heroName + "_" + suff;
    buildRequest(heroName, suffix, queryString);
}