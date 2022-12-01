//Cracking the Coding Interview 1.3

//URLify
//Write a method to replace all spaces in a string with '%20'.

/*
I (Input)      :  String, true length of String
O (Output)     :  String
C (Constrains) :  optimize
E (Edge Cases) :  /
*/

//time complexity:  O(1)
//space complexity: O(1)

//Code

let URLify = (s, n) => {
    //Replace the space char (/ ) global (/g) with '%20'
    //Direct return
    return s.replace(/ /g, '%20');
};

//Testing
console.log(URLify('Mr John Smith', 14) === 'Mr%20John%20Smith');
console.log(URLify(' ', 1) === '%20');
