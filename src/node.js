class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(!this.left){
		this.left = node;
		}
		else if(this.left && !this.right){
			this.right = node;
		}

	}

	removeChild(node) {



	}

	remove() {
		this.child.parent.removeChild(child);

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
