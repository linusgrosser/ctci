/*
Cracking the Coding Interview 2.3

Delete Middle Node
Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node. 


I (Input)      :  1 Node from a linkedList
O (Output)     :  nothing is returned
C (Constrains) :  optimize
E (Edge Cases) :  Node is the first or last Node


time complexity:
space complexity:
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

//Code
let deleteMiddleNode = (n) => {
    //return false if the given node is null or is the last node in List
    if (n === null || n.next === null) return false;
    //store the next node
    let next = n.next;
    //set overwrite n's data with the next nodes data
    n.data = next.data;
    //overwrite next nodes with the node after that
    n.next = next.next;
    return true;
};

//Testing
var input = new LinkedList(new Node(1));
let l = [2,3,4,5,6,7,8,9,10];
for (let n of l) input.head.appendToTail(n);

var output = new LinkedList(new Node(6));
let l2 = [7,8,9,10];
for (let n of l2) output.head.appendToTail(n);

console.log(deleteMiddleNode(input.head.next.next.next));