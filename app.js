"use strict"




  let reverseString = "";
  let originalString = prompt("Enter a string", "(enter here)");
  
  for (var i = originalString.length - 1; i >= 0; i--) {
	reverseString += originalString[i];
  }
  if (reverseString === originalString) {
  	alert("That is a Palindrome");
  }
  else {alert("that is not a Palindrome");
}

