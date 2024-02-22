/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */

const Stack = require("../stacks/stack.js") // required for isPalindrome method. also need a built stack method, change path to match your files


class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.size() > 0;
        return this.size() > 0 ? true : false;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length
    }

    /**
 * Compares this queue to another given queue to see if they are equal.
 * Avoid indexing the queue items directly via bracket notation, use the
 * queue methods instead for practice.
 * Use no extra array or objects.
 * The queues should be returned to their original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Queue} q2 The queue to be compared against this queue.
 * @returns {boolean} Whether all the items of the two queues are equal and
 *    in the same order.
 */
    compareQueues(q2, mainQ=this) { 
        if(this.size() != q2.size()){
            return false;
        }
        if(mainQ.front() != q2.front()){
            return false;
        }
        if(mainQ.front() == q2.front()){
            return true;
        }
        this.compareQueues(q2.dequeue(), mainQ.dequeue())
    }

    compareQueuesLoop(q2) { 
        if(this.size() != q2.size()){
            return false;
        }
        for(let i =0; i<this.size();i++){
            if(this.items[i] == q2.items[i]){
            }
            else{
                return false;
            }
        }
        return true;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() { 
        let stack = new Stack()
        for(let i = 0; i < this.size(); i++){
            let dequeued = this.dequeue()
            stack.push(dequeued)
            this.enqueue(dequeued)
        }
        for(let j = 0; j < this.size(); j++){
            if(this.front() == stack.peek()){
                let dequeued = this.dequeue()
                stack.pop()
                this.enqueue(dequeued)
            }
            else{
                return false;
            }
        }
        return true;
    }
}

/* Rebuild the above class using a linked list instead of an array. */

const myQ = new Queue();

class Qnode {

    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LLQ {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    enqueue(value) {
        const newNode = new Qnode(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.size++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        }
        return this.size;
    }

    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        if (this.size === 1) {
            this.tail = null;
        }
        let oldHead = this.head;
        this.head = this.head.next;
        this.size--;
        return oldHead.data
    }

}

const newQ = new Queue()

myQ.enqueue(1)
myQ.enqueue(2)
myQ.enqueue(2)
myQ.enqueue(1)


newQ.enqueue(1)
newQ.enqueue(2)
newQ.enqueue(1)
newQ.enqueue(2)