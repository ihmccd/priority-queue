const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
 
	}

	push(data, priority) {
	   let newNode = new Node(data,priority);
	   this.insertNode(newNode);
	   this.shiftNodeUp(newNode);

	}

	pop() {
		


	}

	detachRoot() {
		this.root=null;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
			
	}

	isEmpty() {
		
		
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if (this.root==null){
			this.root = node;
		}

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
