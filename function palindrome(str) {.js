function palindrome(str) {
  let result = str.replace(/[^0-9a-zA-Z]/gi, '');
  result = result.toLowerCase();
  console.log(result)
  let j = result.length-1;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== result.charAt(j)) {
      return false;
    } j--
  }  return true;
}

palindrome("race car");