

var txt;
var counts = {};
var keys = [];

function preload() {
  txt = loadStrings('sample.js');

}

function setup() {
  var allwords = txt.join("\n");
  var tokens = allwords.split(/\RACHEL: +/);
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
