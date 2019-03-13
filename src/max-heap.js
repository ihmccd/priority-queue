const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];

	}

	push(data, priority) {
		insertNode(new Node(data,priority));
		shiftNodeUp(new Node(data,priority));

	}

	pop() {
		if(this.root.length>0){
			return this.root;
		}
		detachRoot();
		restoreRootFromLastInsertedNode();
		shiftNodeDown(this.root);

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
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
