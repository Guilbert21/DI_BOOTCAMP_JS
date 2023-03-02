const word = prompt("Enter a word:");

const newWord = word.replace(/[aeiou]/ig, "");

console.log(`The new word without vowels is: ${newWord}`);
