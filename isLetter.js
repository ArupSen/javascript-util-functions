// simple function to test if a character is a letter in the English alphabet
// takes one argument c which is a single character
// returns boolean
    function isLetter(c) {
      'use strict';
      return /[a-zA-Z]/.test(c);
    }
