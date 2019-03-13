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
		let leftChild=data[this.priority*2];



	}

	remove() {
		

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
