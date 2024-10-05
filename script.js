var userInput = prompt("Write Your Sentence.");
var vowelCount = 0;
var lowercase = userInput.toLowerCase();
for (var i = 0; i < lowercase.length; i++) {
  var arr = lowercase[i];
  if (arr === "a" || arr === "e" || arr === "i" || arr === "o" || arr === "u") {
    vowelCount++;
  }
}

alert(`Found Vowels [ ${vowelCount} ] Character,Thank You`);
