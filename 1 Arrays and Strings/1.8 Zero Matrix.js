//Cracking the Coding Interview 1.8

//Zero Matrix
//Write an algorithm such that if an element in an MxN matrix is 0,
//its entire row and column are set to 0

/*
I (Input)      :  2D Array (MxN)
O (Output)     :  2D Array (MxN)
C (Constrains) :  optimize
E (Edge Cases) :  empty Array
*/

//time complexity:  O(M*N)
//space complexity: O(N)

//Code

let zeroMatrix = (m) => {
    //Storing Row and Column index
    let zeroRow = [];
    let zeroCol = [];

    //Loop through matrix
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            //If the current item equals zero, store the row and column index
            if (m[i][j] === 0) { zeroRow.push(i); zeroCol.push(j); }
        }
    }
    //Loop through matrix
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            //if the current items row or column is stored, set value to 0
            if (zeroRow.includes(i) || zeroCol.includes(j)) m[i][j] = 0;
        }
    }
    //return Matrix
    return m;
};


//Testing
let givenArray1 = [
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

let solutionArray1 = [
    [1, 0, 3, 4],
    [0, 0, 0, 0],
    [9, 0, 11, 12],
    [13, 0, 15, 16],
]

let givenArray2 = [
    [0, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 0, 0],
    [13, 14, 15, 16],
]

let solutionArray2 = [
    [0, 0, 0, 0],
    [0, 6, 0, 0],
    [0, 0, 0, 0],
    [0, 14, 0, 0],
]
console.log(JSON.stringify(zeroMatrix(givenArray1)) === JSON.stringify(solutionArray1))
console.log(JSON.stringify(zeroMatrix(givenArray2)) === JSON.stringify(solutionArray2))

