

var http = require('http')
  , fs = require('fs')

var imgUrl = "http://cdn.dota2.com/apps/dota2/images/heroes/"

fs.readFile("../static/heroList.json", 'utf8', (err,data) => {
    var heroList = JSON.parse(data);

    for (var i=0; i< heroList.length; i++) {
        var hero = heroList[i];
        var heroName = hero.name.replace('npc_dota_hero_','');
        var suff = "md.png"
        queryString = heroName + "_" + suff;
        buildRequest(heroName, suff, queryString);
    }
});



buildRequest = (heroName, suffix, queryString) => {
    var request = http.get(imgUrl + queryString, function(res){
        var imagedata = ''
        res.setEncoding('binary')

        res.on('data', function(chunk){
            imagedata += chunk
        })

        res.on('end', function(){
            fs.writeFile('../../public/static/imgs/' + queryString, imagedata, 'binary', function(err){
                if (err) throw err
                console.log('File saved.')
            })
        })

    })
}


