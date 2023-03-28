function isPalindrome(word) {
  const lowerWord = word.toLowerCase()
  let left = 0;
  let right = lowerWord.length - 1;
  while (left < right) {
    if (lowerWord[left] !== lowerWord[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  takes word and compares it to word but backwards
  if true
    return true
  else
    return false
*/

/*
  first I ensure the word is all lowercase
  then i defined left and right to correspond to the first and last letters of the word
  then i used a while and if loop to compare the last letter of the word to the first letter of the word
  if they matched, it would move to the next to letters and compare them
  if it reaches the end of the word and all the letters match, it returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log("=>", isPalindrome('abba'));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


/*
rewrite problem
write a function that takes in a word and checks to see if it is spelled the same way forewards and backwards. if it is a palandrome, it will return true, if not it will return false
*/