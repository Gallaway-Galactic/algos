/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}  //! END BSTNode

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {

  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root === null
    // if(this.root === null){
    //   return true
    // } else {
    //   return false
    // }
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {

    while (current.left) {
      current = current.left
    }

    return current.data
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
  */
  minRecursive(current = this.root) { }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
  */
  max(current = this.root) {

    while (current.right) {
      current = current.right
    }
    return current.data
  } //! MONDAY END

  /**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
  contains(searchVal) {
    if (this.isEmpty()) {
      return false;
    }
    let current = this.root;
    while (current) {
      if (current.data == searchVal) {
        return true;
      }
      if (current.data > searchVal) {
        current = current.left
      }
      else if (current.data < searchVal) {
        current = current.right
      }
    }
    return false;
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (current === null) {
      return false;
    }
    if (current.data === searchVal) {
      return true;
    }
    if (current.data > searchVal) {
      return this.containsRecursive(searchVal, current.left)
    }
    return this.containsRecursive(searchVal, current.right)
  }
  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a sub tree depending on if the
   *    startNode is the root or not.
   */
  range(startNode = this.root) {
    if (!startNode) {
      return null;
    }
    let minVal = this.min(startNode)
    let maxVal = this.max(startNode)
    /*
    also can do:
    return this.max(startNode) - this.min(startNode);
    */
    return maxVal - minVal;
  }

  /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
  maxRecursive(current = this.root) { }


  /**
  * Inserts a new node with the given newVal in the right place to preserver
  * the order of this tree.
  * - Time: O(?).
  * - Space: O(?).
  * @param { number } newVal The data to be added to a new node.
  * @returns { BinarySearchTree } This tree.
  */
  insert(newVal) {
    const newNode = new BSTNode(newVal)
    if (this.isEmpty()) {
      this.root = newNode
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.data === newVal) {
        console.log("value already exists")
        return this;
      }
      if (current.data > newVal) {
        if (!current.left) {
          current.left = newNode
          return this;
        }
        current = current.left
      }
      if (current.data < newVal) {
        if (!current.right) {
          current.right = newNode
          return this;
        }
        current = current.right
      }
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, curr = this.root) {
    const newNode = new BSTNode(newVal)
    if (this.isEmpty()) {
      this.root = newNode
      return this;
    }

    if (curr.data === newVal) {
      console.log("value already exists")
      return this;
    }
    if (curr.data > newVal) {
      if (!curr.left) {
        curr.left = newNode
        return this;
      }
      this.insertRecursive(newVal, curr.left)
    }
    if (curr.data < newVal) {
      if (!curr.right) {
        curr.right = newNode
        return this;
      }
      this.insertRecursive(newVal, curr.right)
    }
  }

  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
      /**
       * DFS Preorder: (CurrNode, Left, Right)
       * Converts this BST into an array following Depth First Search preorder.
       * Example on the fullTree var:
       * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
       * @param {Node} node The current node during the traversal of this tree.
       * @param {Array<number>} vals The data that has been visited so far.
       * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
      */
  toArrPreorder(node = this.root, vals = []) { 
    if(this.isEmpty()){
      return vals;
    }
    if(node){
      vals.push(node.data)
      this.toArrPreorder(node.left, vals)
      this.toArrPreorder(node.right, vals)
    }
  return vals;
  }

  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
      /**
       * DFS Inorder: (Left, CurrNode, Right)
       * Converts this BST into an array following Depth First Search inorder.
       * See debugger call stack to help understand the recursion.
       * Example on the fullTree var:
       * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
       * @param {Node} node The current node during the traversal of this tree.
       * @param {Array<number>} vals The data that has been visited so far.
       * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
      */
  toArrInorder(node = this.root, vals = []) {
    if(this.isEmpty()){
      return vals;
    }
    if(node){
      this.toArrPreorder(node.left, vals)
      vals.push(node.data)
      this.toArrPreorder(node.right, vals)
    }
  return vals;
  }

  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
/**
* DFS Postorder (Left, Right, CurrNode)
* Converts this BST into an array following Depth First Search postorder.
* Example on the fullTree var:
* [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
* @param {Node} node The current node during the traversal of this tree.
* @param {Array<number>} vals The data that has been visited so far.
* @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
*/

toArrPostorder(node = this.root, vals = []) {
  if(this.isEmpty()){
    return vals;
  }
  if(node){
    this.toArrPreorder(node.left, vals)
    this.toArrPreorder(node.right, vals)
    vals.push(node.data)
  }
return vals;
} //! END THURSDAY

    /* fullTree
                        root
                    <-- 25 -->
                  /            \
                15             50
              /    \         /    \
            10     22      35     70
          /   \   /  \    /  \   /  \
        4    12  18  24  31  44 66  90
    /**

    /**
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelorder(current = this.root) {
      let vals = []
      let queue = []
      queue.push(current)
      while(queue.length > 0){
        const currentNode = queue.shift()
        vals.push(currentNode.data)
        if(currentNode.left != null){
          queue.push(currentNode.left)
        }
        if(currentNode.right != null){
          queue.push(currentNode.right)
        }
      }
      return vals;
    }

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root, counter = []) {
      if(this.isEmpty()){
        return 0;
      }
      if(node){
        this.size(node.left, counter)
        this.size(node.right, counter)
        counter.push(1)
      }
      return counter.length;
    }

    size2(node = this.root){
      return this.toArrLevelorder.length
    }
    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
        if(!node){
          return 0
        }
        return 1+Math.max(this.height(node.left), this.height(node.right))
    }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }


} //! END BinarySearchTree








const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
    6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);

/*
const myBST = new BinarySearchTree()

const node1 = new BSTNode(50)
const node2 = new BSTNode(40)
const node3 = new BSTNode(30)
const node4 = new BSTNode(20)
const node5 = new BSTNode(60)
const node6 = new BSTNode(45)
const node7 = new BSTNode(55)
const node8 = new BSTNode(75)
const node9 = new BSTNode(95)


myBST.root = node1
myBST.root.left = node2
myBST.root.left.left = node3
myBST.root.left.left.left = node4
myBST.root.right = node5
node2.right = node6
node5.left = node7
node5.right = node8
node8.right = node9
*/
fullTree.toArrPreorder()




