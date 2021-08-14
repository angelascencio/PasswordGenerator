// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var characterSelection = [];
var finalSelection = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Will ask to enter a password length

function generatePassword(){

  var passwordLength = window.prompt("Enter a password length starting from 8 to 128 -- How long is your password? ");
  console.log(passwordLength);

  //If the number is less than 8 or greater than 128 it will repeat the prompt to determing a character length of 8-128
  while(passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Enter a password length starting from 8 to 128 -- How long is your password? ");
     console.log(passwordLength);
  }

//The window prompt will create a boolean
//var results
//result = window.confirm("Would you like lowercase values")
//console.log(results)//
  
 var characterType = ["uppercase letters", "lowercase letters", "numbers" , "special characters"]
 for (var i=0; i<characterType.length; i++){

   var typedResults ;
   typedResults = window.confirm ("Would you like" + characterType[i] +  " in your password?");
   console.log(typedResults); 

   if(characterType[i] === "uppercase letters" && typedResults){
    characterSelection = [].concat(uppercaseCharacters);
    console.log(characterSelection);
    finalSelection = [].concat(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]);
    console.log(finalSelection);
   }
   else if (characterType[i] === "lowercase letters" && typedResults){
     characterSelection = characterSelection.concat(lowercaseCharacters);
     console.log(characterSelection);
     finalSelection = finalSelection.concat(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]);
     console.log(finalSelection);
   }
   else if (characterType[i] === "numbers" && typedResults){
     characterSelection = characterSelection.concat(numericalCharacters);
     console.log(characterSelection);
     finalSelection = finalSelection.concat(numericalCharacters[Math.floor(Math.random() * numericalCharacters.length)]);
     console.log(finalSelection) ;   
   }
   else if (characterType[i] === "special characters" && typedResults){
     characterSelection = characterSelection.concat(specialCharacters);
     console.log(characterSelection);
     finalSelection = finalSelection.concat(specialCharacters[Math.floor(Math.random) * specialCharacters.length]);
     console.log(finalSelection)
   }
   else if (finalSelection.length === 0 && i === 3){
     alert("At least one option has to be selected");
        generatePassword();
   }
   //console.log(finaleSelection);//
 }
   for (var index = finalSelection.length; index < (passwordLength); index++) {
    finalSelection = finalSelection.concat(characterSelection[Math.floor(Math.random() * characterSelection.length)]);
     console.log(finalSelection);
   } 
   finalSelection = finalSelection.join("");
   return finalSelection;
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
