// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

function generatePassword(){
  var passwordLength = prompt("Enter a password length starting from 8 to 128 -- How long is your password? ");
  console.log(passwordLength);

  while(passwordLength < 8 || passwordLength >= 128) {
    var passwordLength = prompt("Enter a password length starting from 8 to 128 -- How long is your password? ");
     console.log(passwordLength);
  }
}
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
