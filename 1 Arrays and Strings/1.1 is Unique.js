//Cracking the Coding Interview 1.1

//Is Unique
//Implement an algorithm to determine if a string has all unique characters

/*
I (Input)      :  string
O (Output)     :  boolean
C (Constrains) :  No additional data structures
E (Edge Cases) :  empty string
*/

//time complexity:  O(n)
//space complexity: O(n)

//Code

let isUnique = (s) => {
    //Store all characters that have been checked
    let storage = [];
    //Loop through the string
    for (let c of s) {
        //if the char is already in storage List -> String has at least
        //two similar chars -> not unique.
        if (storage.includes(c)) return false;
        //If the char is not in storage List -> add it
        storage.push(c);
    }
    //If no char was found twice, return true
    return true;
};

//Testing
console.log(isUnique('s') === true);
console.log(isUnique('') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('stories') === false);
console.log(isUnique('rainbow') === true);

