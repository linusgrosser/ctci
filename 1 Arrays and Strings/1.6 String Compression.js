//Cracking the Coding Interview 1.6

//String Compression
//Implement a method to perform basic string compression using the counts
//of repeated characters. For example, the string aabcccccaaa would become a2blc5a3.
//If the "compressed" string would not become smaller than the original string,
//your method should return the original string.
//You can assume the string has only uppercase and lowercase letters (a - z).

/*
I (Input)      :  String
O (Output)     :  String
C (Constrains) :  optimize 
E (Edge Cases) :  empty String
*/

//time complexity:  O(n)
//space complexity: O(n)

//Code
let strCompression = (s) => {
    //initializing all variables
    //char = Character we are currently counting
    //count = number of times the char occured
    //comprStr = (compressed string) stores the future output 
    let char = s[0], count = 1, comprStr = '';
    //looping through the string
    for (let i = 0; i < s.length; i++) {
        //if the char is like the next char in the string
        //increase count by 1 and continue to the next index in for loop
        if (char === s[i + 1]) { count++; continue; }
        //if the next char is not equal to the char we are searching
        //add the char and count to the comprStr, reset the count and set
        //the char we are searching for to the next char in the string
        comprStr += char.toString() + count.toString();
        count = 1;
        char = s[i + 1];
    }
    //if the original String was shorter or the same size return it
    //if not, return the compressedString
    return s.length <= comprStr.length ? s : comprStr;
};

//implementation using nested for loop (less readable), less
//time consistent, so slower than V1
let strCompressionV2 = (s) => {
    //storing the original string to compare it later with
    //the compressed string
    let original = s;
    //Variable that holds the compressed String
    let comprStr = '';
    //As long as the String is not empty do the algorithm
    while (s.length !== 0) {
        //initializing 2 variables.
        //c = the char that is at the front of the String
        //count = stores how often c occurs successively
        let c = s[0], count = 0;
        //while the String starts with the current character
        while (s.startsWith(c)) {
            //increase the count var
            count++;
            //delete the first char in the String
            s = s.replace(c, '');
        }
        //Add to the var the analyzed char with the number of times
        //it occured successively
        comprStr += c + count.toString();
    }
    //if the original String was shorter or the same size return it
    //if not, return the compressedString
    return original.length <= comprStr.length ? original + ' (no compression)' : comprStr;
};


//Testing
console.time('strCompression')
console.log(strCompression('aabcccccaaa'));
console.timeEnd('strCompression')

//console.log(strCompression('aAbcCcccaaa'));
