function isPalindrome(word) {
  // Write your algorithm here
  let rightIndex = 0
  let leftIndex = word.length-1
  if(leftIndex > rightIndex){
    if(word[rightIndex] !== word[leftIndex]){
      return false
    }
    rightIndex++;
    leftIndex--;
  }
  return true;
}
/* 
  Add your pseudocode here
*/
//initialize a string called word

//iterate over each item in the input string:
 // if element is a string:
   // push item onto result

//return result

/*
  Add written explanation of your solution here
*/
//call isPalindrome function
//initializing the index's
//loop

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", isPalindrome("dad"))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("a"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
