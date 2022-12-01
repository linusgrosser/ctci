/*
Cracking the Coding Interview 2.7

Intersection
Given two (singly) linked lists, determine if the two lists intersect.
Return the intersecting node.
Note that the intersection is defined based on reference, not value.
That is, if the kth node of the first linked list is the exact
same node (by reference) as the jth node of the second
linked list, then they are intersecting. 


I (Input)      :  2 Singly LinkedLists with an Intersection Node
O (Output)     :  intersecting node
C (Constrains) :  optimize
E (Edge Cases) :  empty List


time complexity:  O(n^2)
space complexity: O(1)
*/

//Code
class Node {
    //initializing node with given data. Sets next node to null
    constructor(data) {
        this.data = data
        this.next = null
    }
    //creates a node at end of LinkedList with given data
    appendToTail(node) {
        //initialize variable with the given node
        let n = this;
        //loop through end of linkedList
        while (n.next !== null) {
            n = n.next;
        }
        //sets the end of the linkedList to end variable (given data)
        n.next = node;
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

//returns the intersecting node
let isIntersecting = (l1, l2) => {
    //initialize first node of first list
    let n1 = l1.head;

    //loop through first list
    while (n1 != null) {
        //initialize first node of second list
        let n2 = l2.head;
        //loop through second list
        while (n2 != null) {
            //If current node of first list and current node of
            //second list are equal (intersecting), return the node
            if (n1 === n2) return n1;
            //if not intersecting continue with next node of second list
            n2 = n2.next;
        }
        //continue with next node of first list
        n1 = n1.next;
    }
    //no intersecting node was found
    return false;
};

//Testing
//Creating two Lists for testing with different values
var list1 = new LinkedList(new Node(1));
let l = [2,3,4,5,6,7];
for (let n of l) list1.head.appendToTail(new Node(n));

var list2 = new LinkedList(new Node(1));
let l2 = [2,3];
for (let n of l2) list2.head.appendToTail(new Node(n));

//initialize a as an intersecting node with 2 following nodes
let a = new Node('intersectingNode1');
a.appendToTail(new Node('intersectingNode2'))
a.appendToTail(new Node('intersectingNode3'))

//Add intersecting node to eachs lists tail
list1.head.appendToTail(a);
list2.head.appendToTail(a);

//Test the case
console.log(isIntersecting(list1, list2) === a);