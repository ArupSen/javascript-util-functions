// simple function to test if a character is a letter in the English alphabet
// takes one argument c which is a single character
// returns boolean
    function isLetter(c) {
      'use strict';
      return /[a-zA-Z]/.test(c);
    }
// creates a random string of 8 chars
function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var result = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		result += chars.substring(rnum,rnum+1);
	}
	return result;
}


