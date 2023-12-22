/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // if (str.length===1) return true
  
  str1=str.toLowerCase().replace(/[^a-z0-9]/g, '')
  str2=str1.split("").reverse().join("")
  return str2===str1 ? true : false
}

module.exports = isPalindrome;
