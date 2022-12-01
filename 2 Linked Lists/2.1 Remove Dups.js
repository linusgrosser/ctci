
/*
Cracking the Coding Interview 2.1

Remove Dups
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed? 


I (Input)      :  unsorted Linked List
O (Output)     :  unsorted Linked List without duplicates
C (Constrains) :  temporary Buffer is not allowed, optimize
E (Edge Cases) :  more than 2x the same data


time complexity:  with buffer O(n), no buffer O(n^2)
space complexity: with buffer O(n), no buffer O(1)
*/

//LinkedList classes and Functions
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
            if (n.data != n2.data) return false;
            //set variables to next node
            n = n.next;
            n2 = n2.next;
        }
        //return true if all nodes are equal
        return true;
    }
}

function deleteNode(h, d) {
    //initialize Variable with the given head of a linkedList
    let n = h;
    //Short Exit
    //if the first node is equal to the given data return
    //the list without the first node
    if (n.data == d) return h.next;

    //loop through linkedList
    while (n.next != null) {
        //if the next node data equals the given data
        if (n.next.data == d) {
            //skip the next node by overwriten it with the one after that
            n.next = n.next.next;
            //return the linkedList since the node has been removed
            return h;
        }
        //set n to next node
        n = n.next;
    }
    //return linkedList if nothing has been deleted
    return h;
}

//Code
let deleteDuplicates = (l) => {
    //initialize variable n with the first node in LinkedList
    let n = l.head;
    //initialze an array s to store the node data
    let s = [];
    //loop through the linkedlist
    while (n != null) {
        //if the current nodes data is already in the array, delete a node with that data
        //if the data is not in the array, add it
        if (s.includes(n.data)) l.head = deleteNode(l.head, n.data); else s.push(n.data);
        //set the current Node to the next one
        n = n.next;
    }
    //return the linkedlist
    return l;
};

let deleteDuplicatesNoBuffer = (l) => {
    //initialize variable n with the first node in LinkedList
    let n = l.head;
    //loop through the linkedlist
    while (n != null) {
        //set runner variable to current node
        let runner = n;
        //loop through linkedList as runner
        while (runner.next != null) {
            //if runner and current node have same data, overwrite next node
            //with the node after hat
            if (runner.next.data == n.data) runner.next = runner.next.next;
            //if data is not the same, continue looping through list
            else runner = runner.next;
        }
        //set n to next node
        n = n.next;
    }
    //return the linkedlist    
    return l;
};

//Testing
var input = new LinkedList(new Node(1));
let l = [2, 4, 4, 5, 6, 6, 6, 7, 7, 7];
for (let n of l) input.head.appendToTail(n);

var output = new LinkedList(new Node(1));
let l2 = [2, 4, 5, 6, 7];
for (let n of l2) output.head.appendToTail(n);

console.log(deleteDuplicates(input).equals(output));
console.log(deleteDuplicatesNoBuffer(input).equals(output));




