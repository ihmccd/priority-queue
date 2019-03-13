const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];

	}

	push(data, priority) {
		let node1=new Node(data, priority);
		insertNode(node1);
		shiftNodeUp(node1);

	}

	pop() {


	}

	detachRoot() {
		this.root=null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.root.length;	
	}

	isEmpty() {
		
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
