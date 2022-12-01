//Cracking the Coding Interview 1.4

//Palindrome Permutation
//Write a function to check if a String is a permutation of a palindrome.
//A palindrome is a word or phrase that is the same forwards and backwards. 
//A permutation is a rearrangement of letters.
//The palindrome does not need to be limited to just dictionary words.

/*
I (Input)      :  String
O (Output)     :  boolean
C (Constrains) :  optimize
E (Edge Cases) :  empty String
*/

/*
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.) 
*/

//time complexity:  O(n*a) ?
//space complexity: O(1)

//Code
let isPalPerm = (v) => {
    //Deleting all spaces in String and change it to lowerCase
    s = v.replace(/ /g, '').toLowerCase();
    //Number of chars that occur an odd number of times in the given string
    let oddCount = 0;
    //Loop thorugh each char of string
    for (let c of s) {
        //Indicates if the current Char is even
        let isEven = true;
        //While this char is included in string
        while (s.includes(c)) {
            //change boolean to opposite & remove the char from String
            isEven = !isEven;
            s = s.replace(c, '');
        }
        //If the char occured an odd number of times -> increase oddCount by 1
        if (!isEven) oddCount++;
    }
    //If more than 1 char occurs an odd number of times return false
    //If no or one char occurs an odd number of time return true
    //Additionally check if the beginning String was empty -> return false
    return oddCount <= 1 && v.length > 0;
};

//Testing
console.log(isPalPerm('Tact Coa') === true);
console.log(isPalPerm('Toto') === true);
console.log(isPalPerm('Lorem ipsum') === false);
console.log(isPalPerm('Testing sentence') === false);
console.log(isPalPerm('No lemon, no melon') === true);
console.log(isPalPerm('No lemon no melon') === true);
console.log(isPalPerm('') === false);





