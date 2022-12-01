/*
Cracking the Coding Interview 2.5

Sum Lists
You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list.
Write a function that adds the two numbers and returns the sum as a linked list.


I (Input)      :  Two Linked Lists
O (Output)     :  Sum of two LinkedLists as numbers
C (Constrains) :  optimize
E (Edge Cases) :  empty List


time complexity:  O(n)
space complexity: O(1)
*/

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
let sumLists = (l1, l2) => {
    //initialize variables n1 and n2 to the first node of LinkedList
    let n1 = l1.head, n2 = l2.head;
    //initialize Multiplier that keeps track of the multiplication of each digit of the number
    //first digit = 1, second digit = 10, third digit = 100 ...
    //Sum stores the current sum
    let multiplier = 1, sum = 0;

    //loop through the LinkedLists as long as both are not null
    while (n1 !== null || n2 !== null) {
        //Add to the sum variable:
        //add the values of n1 & n2 and multiply them by the current multiplier
        //if one of the value of n1 or n2 is null, then just use 0 instead
        sum += (((n1 === null ? 0 : n1.data) + (n2 === null ? 0 : n2.data)) * multiplier);
        //Increase the multiplier by times 10
        multiplier *= 10;
        //If existing, change the current nodes to the ones after that.
        //if not exisiting, just set the nodes to null
        n1 = n1 === null ? null : n1.next;
        n2 = n2 === null ? null : n2.next;
    }

    //Return sum
    return sum;
};

let sumListsForward = (l1, l2) => {
    //initialize variables n1 and n2 to the first node of LinkedList
    return getNumByLinkedList(l1) + getNumByLinkedList(l2);    
    
    //returns a number by a given list by adding digit by digit and then
    //parsing it as int
    function getNumByLinkedList(l) {
        //n = current node, num = storing the number
        let n = l.head, num = '';
        //loop through linked List. Add the current nodes data to num String
        //set n to next node
        while (n != null) { num += n.data; n = n.next; }
        //return num as int
        return parseInt(num);
    }
};

//Testing
var list1 = new LinkedList(new Node(7));
let l = [1,6];
for (let n of l) list1.head.appendToTail(n);

var list2 = new LinkedList(new Node(5));
let l2 = [9,2];
for (let n of l2) list2.head.appendToTail(n);

var list3 = new LinkedList(new Node(6));
let l3 = [1,7];
for (let n of l3) list3.head.appendToTail(n);

var list4 = new LinkedList(new Node(2));
let l4 = [9,5];
for (let n of l4) list4.head.appendToTail(n);

console.log(sumLists(list1, list2) === 912);
console.log(sumListsForward(list3, list4) === 912);
