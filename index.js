"use strict";
const userInput = document.querySelector(".input");
const checkBtn = document.querySelector(".btn");
const body = document.querySelector("body");
const IsPalindrome = document.querySelector(".result");

const removePunctuation = function (str1) {
  const regex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_{|}~\s]/g;
  return str1.replace(regex, "");
};

checkBtn.addEventListener("click", function () {
  let reversedPhrase = "";
  console.log(userInput.value);
  const reverseString = function (str) {
    str = removePunctuation(str);
    str = str.toLowerCase();

    for (let i = str.length - 1; i >= 0; i--) {
      reversedPhrase += str[i];
    }
    IsPalindrome.classList.remove("hidden");
    if (!userInput.value) {
      alert(`Please input a value`);
    } else {
      if (reversedPhrase === str) {
        IsPalindrome.textContent = `${userInput.value} is a palindrome`;
      } else {
        IsPalindrome.textContent = `${userInput.value} is not a palindrome`;
      }
    }
  };
  reverseString(userInput.value);
  userInput.value = "";
  userInput.textContent = userInput.value;
});
