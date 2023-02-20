"use strict";
// a function that takes in two words as parameters and return a boolean
// true if the words are anagrams
function checkAnagrams(wordOne, wordTwo) {
    if (wordOne.length !== wordTwo.length) {
        return false;
    }
    const wordOneChars = wordOne.split('').sort();
    const wordTwoChars = wordTwo.split('').sort();
    for (let i = 0; i < wordOneChars.length; i++) {
        if (wordOneChars[i] !== wordTwoChars[i]) {
            return false;
        }
    }
    return true;
}
console.log(checkAnagrams("listen", "silent"));
console.log(checkAnagrams("listen", "silents"));
