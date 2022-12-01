//Cracking the Coding Interview 1.5

//One Away
//There are three types of edits that can be performed on strings: insert a character,
//remove a character, or replace a character. Given two strings,
//write a function to check if they are
//one edit (or zero edits) away. 

/*
I (Input)      :  2 Strings
O (Output)     :  boolean
C (Constrains) :  optimize
E (Edge Cases) :  1 empty String, same Strings
*/

//time complexity:  O(n)
//space complexity: O(n)

//Code

let oneAway = (s1, s2) => {
    //Short exits
    //if the length of the two Str differs more than 1 char -> can't be one away
    if (Math.abs(s1.length - s2.length) > 1) return false;
    //if str1 equals str2 -> no edit away -> true
    if (s1 === s2) return true;

    //Swaps the Strings if necessary, so that the longer string is s1
    //t = temp value for storing while switching values
    if (s1.length < s2.length) { let t = s1; s1 = s2; s2 = t; }
    
    //boolean if strings have the same length (important for change operation)
    let sameLength = s1.length === s2.length;
    //Counting the amount of characters that differ
    let count = 0;
    //Looping through s1
    for (let i in s1) {
        //If strings have the same length set subtractor to 0
        //if not, to count
        let subtr = sameLength ? 0 : count;
        //If the current char is not the same in the two strings
        //increase count var by 1
        if (s1[i] !== s2[i - subtr]) count++;
    }
    
    //If the amount of characters that differ between the two strings
    //is more than 1, return false | if not, that means that one of the
    //3 operations (insert, delete, change) can result in s1 turning into s2 -> true
    return count <= 1;
};

//Testing
console.log(oneAway('pale', 'ple') === true);   //insert
console.log(oneAway('ple', 'pale') === true);   //insert
console.log(oneAway('pales', 'pale') === true); //delete
console.log(oneAway('pale', 'bale') === true);  //change
console.log(oneAway('pale', 'pale') === true);  //0 away
console.log(oneAway('pale', 'bake') === false); //change 2
console.log(oneAway('paler', 'bakerman') === false);
console.log(oneAway('', 'a') === true);
console.log(oneAway('', '') === true);






