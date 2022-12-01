//Cracking the Coding Interview 1.7

//Rotate Matrix
//Given an image represented by an NxN matrix, where each pixel in the image is 4
//bytes, write a method to rotate the image by 90 degrees

/*
I (Input)      :  "image" (2D (NxN) String Array)
O (Output)     :  rotated "image" (2D (NxN) String Array) by 90 deg clockwise
C (Constrains) :  optimize, rotate matrix in place (not implemented)
E (Edge Cases) :  empty array
*/

//time complexity:  O(n^2)
//space complexity: O(1) / O(n) (rotateMatrix2)

//Code
let rotateMatrix1 = (m) => {
    //Storing the length and width of the array since the input length is NxN
    var n = m[0].length;
    //If there is no data in the array return it since its the same rotated
    if (n === 0) return m;
    
    //Loop through given matrix to swap column and rows
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            //swap content
            let temp = m[i][j];
            m[i][j] = m[j][i];
            m[j][i] = temp;
        }
    }
    //Loop through given matrix to flip horizontally
    for (let i = 0; i < n; i++) {
        //for j only half the length of the array since we are
        //swapping from outside to inside
        for (let j = 0; j < (n/2); j++) {
            //swapping "left" and "right" side
            let temp = m[i][j];
            m[i][j] = m[i][n-1-j];
            m[i][n-1-j] = temp;
        }
    }
    //Return rotated Matrix
    return m;
};

//Simple Rotation with second Matrix
let rotateMatrix2 = (m) => {
    //Storing the length and width of the array since the input length is NxN
    var n = m[0].length;
    //If there is no data in the array return it since its the same rotated
    if (n === 0) return m;
    //Create a empty dummy Matrix with the same length as m 
    var rotatedM = Array.from(Array(n), () => new Array(n));
    
    //Loop through given matrix
    for (let c = 0; c < n; c++) {
        for (let r = 0; r < n; r++) {
            //Set the dummy Matrix Value to the right m Value
            rotatedM[r][n - (c+1)] = m[c][r];
        }
    }
    //Return rotated Matrix
    return rotatedM;
};


//Testing
let givenArray1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

let solutionArray1 = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
]

let givenArray2 = [
    [1, 2],
    [3, 4],
]

let solutionArray2 = [
    [3, 1],
    [4, 2],
]


console.log(JSON.stringify(rotateMatrix1(givenArray1)) === JSON.stringify(solutionArray1))
console.log(JSON.stringify(rotateMatrix1(givenArray2)) === JSON.stringify(solutionArray2))
console.log(JSON.stringify(rotateMatrix1([[1]])) === JSON.stringify([[1]]))
console.log(JSON.stringify(rotateMatrix1([[]])) === JSON.stringify([[]]))


