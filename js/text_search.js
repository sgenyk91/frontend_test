var searchText = document.getElementById('search_text');
var phrase = document.getElementById('phrase');

// Grabs word from input field and emits a phrase with the results of the search
function grabWord() {
  var word = document.getElementById('search_input').value;
  if (word.length > 0) {
    var number = searchAll(word);
    phrase.innerHTML = 'Found ' + number + ' occurances of the word "' + word + '" in the below text.' 
  } else {
    phrase.innerHTML = 'Please enter in a word.';
  }
}

//Searches through the text for a match of the input word
function searchAll(word) {
  var wordCount = 0;
  escapeSpecialCases(word);
  var regExWord = new RegExp(word, 'g');

  var stringOfText = searchText.textContent;
  var matches = stringOfText.match(regExWord);

  if (matches) {
    wordCount = matches.length;
  }
  return wordCount;
}

// Makes sure that the special cases in the input are treated as a string
function escapeSpecialCases(input) {
  input.replace(/[\-\[\]\{\}\(\)\*\+\?\.\,\\\^\$\|]/g, "\\$&");
}