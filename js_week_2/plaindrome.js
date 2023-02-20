function checkPalindrome(str) {
    let myString = str.toString()
    let noSpaces = myString.split(' ').join('');
    let reverseNoSpaces = noSpaces.split('').reverse().join('');
    return noSpaces.toLowerCase() === reverseNoSpaces.toLowerCase();
}

console.log(checkPalindrome('sus'));