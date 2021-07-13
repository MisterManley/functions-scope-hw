/* Question 1: a parameter is a placeholder variiable defined when a function is created. This allows a user or another developer to pass arguments to the function when they call the function from a different piece of code. Depending on the function's creator, the parameters defined maybe mandatory or optional. */

/* Question 2: console.log sends the completed function, or part of it, to a browser's - or editor's - console window. return, on the other hand, sends the results of (or returns to) the function to the piece of code that's calling it */

/* Question 3: letting a function return a value lets javascript, and other languages, influence the behavior of web pages and applications. This can make them dynamic */

/* CHECK PALINDROME PROBLEM */

// function checkPalindrome(string){
    
//     //find the length of "string", convert it to lowercase and replace all non-string characters with an empty string[not a space character], search globally (/g). Source: freeCodeCamp.org

//     string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
//     const length = string.length;

//     // loops through the first half of the string (length/2)
//     for(let i = 0; i < length/2; i++){

//         //compares characters from the first and second half of the string for equality first half (length / 2) second half (length - 1 - i)
//         if(string[i] !== string[length - 1 - i]){
//             return "This is not a palindrome";
//         } else {
            
//         }
//     }
//     return "This is a palindrome";
       
     
// }



// let palinCandidate = "Mom";
// const result = checkPalindrome(palinCandidate);
// console.log(result);

// PALINDROME //

// function checkPalidrome(string) {

//     string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
//     // yeah, I know String is a reserve word, but "string" (no capital S)
//     //is just fine as a variable. All chars that need to be replaced 
//     //in a string as a sentence, phrase, whatever are listed in this group
//     //and globally searched.

//     // Exclusive OR (XOR) says 'any character that isn't in this list 
//     // needs to be repplaced with the empty string "" - or -
//     // "All characters that are in this list are excluded from replacement."
//     const length = string.length;

//     //loops through the first half of the loop before hitting the conditional
//     for(let i = 0; i < length/2; i++) {

//         if(string[i] !==string[length -1 -i]){
//             return "This is not a palindrome.";
//         } 
        
//         return "This is a palindrome."

//     }

// }

// let data = "RacEcAr";
// const result = checkPalidrome(data);    //passes argument to the "string" param
//                                         //in the function call
// console.log(result);

//Mental/Physical rep #1

// function checkPalindrome(string) {

//     string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
//     const length = string.length;

//     for(let i = 0; i < length / 2; i++){
        
//         if(string[i] !== string[length - 1 - i]){
//             return "This is not a palindrome";
//         }
//     }
//     return "This is a palindrome"       //This has to be declared outside of
//                                         //the loop to prevent it from being
//                                         //called from inside the loop and
//                                         //printing the message over and over
//                                         //giving the user the wrong message
// }

// let data = prompt("Enter a word, phrase or sentence."); //added user input prompt
// let result = checkPalindrome(data);                  //passes argument to parameter 
//                                                     //in function
// console.log(result);

//Mental/Physical Rep #2 (code only)

// function palindrome(characters){

//     characters = characters.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
//     const length = characters.length;

//     for(let i = 0; i < length/2; i++){
//         if(characters[i] !== characters[length -1 - i]){
//             return "This is not a palindrome!";
//         }
//     }
//     return "This is a palidrome!"
// }


//Check a List


// function checkForStudent(string, stringArray){
//     for(let i = 0; i < stringArray.length; i++){
//         if(stringArray[i] === "Sally"){
//             return `We found ${stringArray[i]} at the ${i} position in the array! Let's get this party started!`;
//         } 

//     } 
    
    
// }


// const studentIncluded = checkForStudent('Sally', ["Bill", "Kyle", "Gregory", "Sally"]);

// console.log(studentIncluded);

/////////////////// SUM an ARRAY /////////////////////////////////////

// function sumArray(array){
//     let theSum= 0;
//     for(let i in array){
//         theSum += array[i];
//     }
//     return theSum;
// }

// let testArray = [1, 2, 3, 4, 5, 6];
// let result = sumArray(testArray);
// console.log(result);

/////////// A-HA! Found a use for the for...in loop credit: 
/////////// https://www.codegrepper.com/code-examples/javascript/sum+of+array+of+numbers+in+javascript+without+using+inbuilt+function

//Goodness... that was long.






