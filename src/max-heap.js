const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];

	}

	push(data, priority) {
		insertNode(Node(data,priority));
		shifNodeUp(Node(data,priority));

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
		this.root.length==0 ? "empty" :"";
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if (this.root.length==0){
			this.root=node;
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
