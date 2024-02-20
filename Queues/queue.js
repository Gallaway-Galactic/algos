/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
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

const myQll = new LLQ()

console.log(myQll.enqueue(1))