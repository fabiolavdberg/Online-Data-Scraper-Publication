// Je variabelen waarin je data opslaat
// var txt;
// var counts = {};
// var keys = [];
// var actorsList = ["JOEY", "PHOEBE", "MONICA","RACHEL","ROSS","CHANDLER"];

// Het inladen van je tekst
// function preload() {
//   txt = loadStrings('sample.js');
// }

// De centrale code die zorgt dat alles word uitgevoerd
// function setup() {
//   var allwords = txt.join("\n");
  // Dit is een for-loop die door elke item van een lijst heen looped
  // de code binnen de for-loop word voor elke item van de array "actorList" uitgevoerd
  // het woordje 'actor' is een variable dat steeds veranderd
  // de eerste keer is de tekst van 'actor' JOEY en de tweede keer "PHOEBE"
  // op deze manier word dus de functie countText voor elke acteur uitgevoerd met steeds de juiste naam
  // for (actor in actorsList) {
  //   countText(allwords);
    // console.log(actorsList[actor]);
//   }
//
//   for (var i = 0; i < keys.length; i++) {
//     var key = keys[i];
//     createDiv(key + " " + counts[key]);
//   }
//   noCanvas();
//
// }
// De algemene functie met een argument "actorsName"
// dit argument gebruiken we als een variable
// dit is een manier om de data van ergens anders in een functie te krijgen
// in dit geval is het de naam van de acteur
// function countText(words){
//   var allwords = words;

  // we gebruiken de naam van het argument wat dus gelijkstaat aan de naam van de acteur
  // if(actorsName == "JOEY") {
  //   var tokens = allwords.split(/\"JOEY:+/);
  // } else if(actorsName == "MONICA") {
  //   var tokens = allwords.split(/\"MONICA:+/);
  // } else {
  //   var tokens = allwords.split(/\"JOEY:+/);
  // }
  // if(actorsName == "RACHEL") {
  //   var tokens = allwords.split(/\"RACHEL:+/);
  // } else if(actorsName == "CHANDLER") {
  //   var tokens = allwords.split(/\"CHANDLER:+/);
  // } else {
  //   var tokens = allwords.split(/\"RACHEL:+/);
  // }
  // if(actorsName == "ROSS") {
  //   var tokens = allwords.split(/\"ROSS:+/);
  // } else if(actorsName == "PHOEBE") {
  //   var tokens = allwords.split(/\"PHOEBE:+/);
  // } else {
  //   var tokens = allwords.split(/\"ROSS:+/);
  // }

  // var tokens = allwords.split(/\"JOEY:+/);
  // for (var i = 0; i < tokens.length; i++) {
  //   var word = tokens[i].toLowerCase();
  //   if (!/\d+/.test(word)) {
      //console.log(word);
//       if (counts[word] === undefined) {
//         counts[word] = 1;
//         keys.push(word);
//
//       } else {
//         counts[word] = counts[word] + 1;
//       }
//     }
//   }
//
//   keys.sort(compare);
// }
//
// function compare(a, b) {
//   var countA = counts[a];
//   var countB = counts[b];
//   return countB - countA;
// }



var txt;
var counts = {};
var keys = [];

function preload() {
  txt = loadStrings('sample.js');

}

function setup() {
  var allwords = txt.join("\n");
  var tokens = allwords.split(/JOEY: +/);
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (!/\d+/.test(word)) {
      //console.log(word);
      if (counts[word] === undefined) {
        counts[word] = 1;
        keys.push(word);
      } else {
        counts[word] = counts[word] + 1;
      }
    }
  }

  keys.sort(compare);

  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    createDiv(key + " " + counts[key]);
  }
}
