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
		if (node==this.left){
			this.left =null;
		}
		if (node==this.right){
			this.right =null;
		}
		child.parent.removeChild(child);

	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
