/*
Cracking the Coding Interview 2.2

Return Kth to Last
Implement an algorithm to find the kth to last element of a singly linked list.


I (Input)      :  LinkedList, k 
O (Output)     :  LinkedList with elements from k to last
C (Constrains) :  optimize
E (Edge Cases) :  k > size of linkedlist, k = 0


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
let kToLast = (l, k) => {
    //initialize two node pointers
    let n1 = l.head;
    let n2 = l.head;
    //do k times
    for (let i = 0; i < k; i++) {
        //if pointer 1 is null it means, k is greater than size of list
        if (n1 == null) return null;
        //set 1. pointer to next node
        n1 = n1.next;
    }

    //loop through the end of linkedlist
    //when pointer 1 reaches the end of the list,
    //pointer 2 includes all nodes from k to the last node of the list 
    while (n1 != null) {
        //set pointers to next node
        n1 = n1.next;
        n2 = n2.next;
    }
    //return pointer 2 as linkedList
    return new LinkedList(n2);
};

//Testing
var input = new LinkedList(new Node(1));
let l = [2,3,4,5,6,7,8,9,10];
for (let n of l) input.head.appendToTail(n);

var output = new LinkedList(new Node(6));
let l2 = [7,8,9,10];
for (let n of l2) output.head.appendToTail(n);

console.log(kToLast(input, 5).toString() === output.toString());
