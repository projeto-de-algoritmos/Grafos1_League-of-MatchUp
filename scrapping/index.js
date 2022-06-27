const axios = require('axios');
const cheerio = require('cheerio');
const { Console } = require('console');
const fs = require('fs');


const urlNodes = 'https://www.leagueoflegends.com/pt-br/champions/'; 
nodes = []

axios(urlNodes).then(response => {
    tabelaChamps = []
    tabelaChampsImages = []
    const lolPageChamps = response.data;
    const $ = cheerio.load(lolPageChamps);
    const listTable = $('.style__List-sc-13btjky-2');
    listTable.each(function(){
        const span = $(this).find('.style__Wrapper-n3ovyt-0')
        span.each(function(){
            const nameChampion = $(this).find('.gMLOLF').text()
            const images =  $(this).find('.style__NoScriptImg-g183su-0').attr("src")
            tabelaChampsImages.push(images)
            tabelaChamps.push(nameChampion)

        })
    })

    console.log(tabelaChampsImages)
    for (var i = 0; i < tabelaChamps.length ; i++) {
        nodes.push({
            "id": i+1,
            "champ": tabelaChamps[i],
            "image": tabelaChampsImages[i]
        })
    }
    // Gera o arquivo de Nos
    var nodesContent = JSON.stringify(nodes);
    fs.writeFile("Nodes.json", nodesContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });

}).catch(console.error);

// Criar edges
const urlEdges = 'https://www.leagueofgraphs.com/pt/champions/counters'; 
axios(urlEdges).then(response => {
    tabelaMatchUp = []
    const lolPage = response.data;
    const $ = cheerio.load(lolPage);
    const listTable = $('.sortable_table');
    listTable.each(function(){
        const tr = $(this).find('tr');
        tr.each(function (){
            const tdCount = $(this).find('td').length;
            if (tdCount ==5){
                const txt = $(this).find('.txt');
                txt.each(function (){
                    nameChampion = $(this).find('.name').text();
                    tabelaMatchUp.push(nameChampion)
                })
            }
        })
    })
    edges = []
    id = 1
    for (var i = 0; i < tabelaMatchUp.length ; i=i+4) {
        edges.push({
            "nameChamp": tabelaMatchUp[i],
            "nameBetterThan": tabelaMatchUp[i+2],
            "champ": nodes.findIndex(std=> std.champ === tabelaMatchUp[i]),
            "betterThan": nodes.findIndex(std=> std.champ === tabelaMatchUp[i+2])
        })
        edges.push({
            "nameChamp": tabelaMatchUp[i+3],
            "nameBetterThan": tabelaMatchUp[i],
            "champ": nodes.findIndex(std=> std.champ === tabelaMatchUp[i+3]),
            "betterThan": nodes.findIndex(std=> std.champ === tabelaMatchUp[i])
        })
    }
    var edgeContent = JSON.stringify(edges);
    fs.writeFile("Edges.json", edgeContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    
}).catch(console.error);

// //http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Aatrox_0.png
// //http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gwen_0.jpg