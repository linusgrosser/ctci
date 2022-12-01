//Cracking the Coding Interview 1.2

//Check Permutation
//Given two strings, write a method to decide if one is a permutation of the other.

/*
I (Input)      :  Two Strings
O (Output)     :  boolean
C (Constrains) :  /
E (Edge Cases) :  Empty String(s), different lengths
*/

//time complexity:  O(n)
//space complexity: O(1)

//Code

let checkPermutation = (s1, s2) => {
    //If length of the strings is not equal, it can't be a permutation
    //So -> Return false to end the function.
    if (s1.length !== s2.length) return false;
    //Loop through each Char of s2. If s1 has the char in it, delete it.
    for (c of s2) if (s1.includes(c)) s1 = s1.replace(c, '');
    //If, at the end, the first string has no characters left -> s1 is a permutation of s2
    return s1.length === 0;
};

//Testing
console.log(checkPermutation('bachwels', 'schwalbe') === true);
console.log(checkPermutation('AAB', 'ABA') === true);
console.log(checkPermutation('A', 'A') === true);
console.log(checkPermutation('restful', 'fluster') === true);
console.log(checkPermutation('BAB', 'ABAB') === false);
console.log(checkPermutation('', '') === true);




