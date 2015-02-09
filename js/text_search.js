var searchText = document.getElementById('search_text');
var phrase = document.getElementById('phrase');

console.log(searchText.textContent.split(/\W+/));

function grabWord() {
  console.log("HERE");
  var word = document.getElementById('search_input').value;
  var number = searchAll(word);
  phrase.innerHTML = 'Found ' + number + ' occurances of the word "' + word + '" in the below text.' 
}

function searchAll(word) {
  var wordCount = 0;
  var arrayOfText = searchText.textContent.split(/\W+/);
  for (var i = 0; i < arrayOfText.length; i++) {
    if (arrayOfText[i].toLowerCase() === word.toLowerCase()) {
      wordCount++;
    }
  }
  return wordCount;
}