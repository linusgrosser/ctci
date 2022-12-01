//Cracking the Coding Interview 1.9

//String Rotation
//Assume you have a method isSubstring which checks if oneword is a substring
//of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
//call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").

/*
I (Input)      :  2 Strings
O (Output)     :  boolean
C (Constrains) :  only one call to isSubstring, optimize
E (Edge Cases) :  emtpty String
*/

//time complexity:  O(n)
//space complexity: O(1)

//Code

let isRotation = (s1, s2) => {
    //Fast Exit for if the length is not the same or if the strings are the same
    if (s1.length !== s2.length && s1 !== s2) return false;
    //combine s2 2x times and check if s1 is a substring. If true, s2 is a roation
    //of s1.
    return (s2 + s2).includes(s1);
};

//Testing
console.log(isRotation('waterbottle', 'erbottlewat') === true);
console.log(isRotation('testfunction', 'ctiontestfun') === true);
console.log(isRotation('nottrue', 'trueno') === false);

