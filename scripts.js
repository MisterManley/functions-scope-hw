/* Question 1: a parameter is a placeholder variiable defined when a function is created. This allows a user or another developer to pass arguments to the function when they call the function from a different piece of code. Depending on the function's creator, the parameters defined maybe mandatory or optional. */

/* Question 2: console.log sends the completed function, or part of it, to a browser's - or editor's - console window. return, on the other hand, sends the results of (or returns to) the function to the piece of code that's calling it */

/* Question 3: letting a function return a value lets javascript, and other languages, influence the behavior of web pages and applications. This can make them dynamic */



function checkPalindrome(string){
    let re = /[\W_]/g;
    //find the length of "string", convert it to lowercase and replace all non-string characters with an empty string[not a space character], search globally (/g). Source: freeCodeCamp.org
    string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    const length = string.length;

    // loops through the first half of the string (length/2)
    for(let i = 0; i < length/2; i++){

        //compares characters from the first and second half of the string for equality first half (length / 2) second half (length - 1 - i)
        if(string[i] !== string[length - 1 - i]){
            return "This is not a palindrome";
        } else {
            
        }
    }
    return "This is a palindrome";
       
     
}



let palinCandidate = "Mom";
const result = checkPalindrome(palinCandidate);
console.log(result);