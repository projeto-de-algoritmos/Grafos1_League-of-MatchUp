
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const url = 'https://www.leagueofgraphs.com/pt/champions/counters';
axios(url).then(response => {
    tabelaMatchUp = []
    const lolPage = response.data;
    const $ = cheerio.load(lolPage);
    const listTable = $('.sortable_table');
    listTable.each(function(){
        const tr = $(this).find('tr');
        tr.each(function (){
            const txt = $(this).find('.txt');
            txt.each(function (){
                nameChampion = $(this).find('.name').text();
                tabelaMatchUp.push(nameChampion)
            })
        })
    })
    json = []
    for (var i = 0; i < tabelaMatchUp.length ; i=i+4) {
        json.push({
            "name": tabelaMatchUp[i],
            "cautera": tabelaMatchUp[i+2]
        },
        // {
        //     "name": tabelaMatchUp[i+3],
        //     "cautera": tabelaMatchUp[i],
        // }
        )
     }
    console.log(json.length)
    var jsonContent = JSON.stringify(json);
    fs.writeFile("matchUps.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    
}).catch(console.error);

//http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Aatrox_0.png
//http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gwen_0.jpg