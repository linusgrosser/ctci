/*
Cracking the Coding Interview 2.6

Palindrome
Implement a function to check if a linked list is a palindrome. 


I (Input)      :  LinkedList
O (Output)     :  boolean
C (Constrains) :  optimize
E (Edge Cases) :  empty LinkedList


time complexity:  O(n)
space complexity: O(n)
*/

//Code
class Node {
    //initializing node with given data. Sets next node to null
    constructor(data) {
        this.data = data
        this.next = null
    }
    //creates a node at end of LinkedList with given data
    appendToTail(d) {
        //initializes a variable (node with given data) that will be
        //added at the end of linkedList
        let end = new Node(d);
        //initialize variable with this node
        let n = this;
        //loop through end of linkedList
        while (n.next !== null) {
            n = n.next;
        }
        //sets the end of the linkedList to end variable (given data)
        n.next = end;
    }
}

class LinkedList {
    //when initializing, if head is not given, its set to null
    constructor(head = null) {
        this.head = head;
    }
    //Returns a String. Visualizes the Data of the
    //Nodes in the linkedList
    toString() {
        //initialize Variable to this linkedlists head
        let n = this.head;
        //create empty array to store node data
        let s = [];
        //loop through linkedList
        while (n != null) {
            //add each Nodes data to array
            s.push(n.data);
            //set n to next node
            n = n.next;
        }
        //return String of storage array
        return s.toString();
    }
    //Returns a boolean, checks if this linkedList and a given
    //Linked List are equal
    equals(l) {
        //store the first node of this list and the given list
        let n = this.head;
        let n2 = l.head;
        //loop through this linkedList
        while (n != null) {
            //if the data of the two lists are not equal, return false
            console.log(n.data + ' - ' + n2.data);
            if (n.data != n2.data) return false;
            //set variables to next node
            n = n.next;
            n2 = n2.next;
        }
        //return true if all nodes are equal
        return true;
    }
}


let isPalindrome = (l) => {
    //Initialize Variable n containing the first node
    let n = l.head;
    //initialize array a storing all letters from the linkedList
    let a = [];
    //Loop through LinkedList. Push each letter to Array a
    while (n != null) { a.push(n.data); n = n.next; }

    //Return true if the Array is the same reversed
    // => Word in LinkedList is the same forward as backward
    return a === s.reverse();
};

//Testing
var list = new LinkedList(new Node('m'));
let l = ['a','l','a','y','a','l','a','m'];
for (let n of l) list.head.appendToTail(n);

console.log(isPalindrome(list) === true);