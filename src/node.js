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
			node.parent = this;
		}
		else if(this.left && !this.right){
			this.right = node;
			node.parent = this;
		}

	}

	removeChild(node) {

		


		 if (node==this.left){
			this.left=null;
;
		}
		else if(node==this.right ) {
			this.right=null;

		}
		else if(node!=this.left && node!=this.right){
			throw "Error";
			}
		node.parent=null;




	}

	remove() {
		if (this.parent){
			if (this.parent.left){
				this.parent.removeChild(this.parent.left);
			}
			else if (this.parent.right){
				this.parent.removeChild(this.parent.right);
			}

		}

	}

	swapWithParent() {
	if (this.parent){
/*
		let this_left_temp=this.left;
		let this_right_temp=this.right;
		let this_parent_temp = this.parent;

		let parent_right=this.parent.right;

		let parent_left=this.parent.left;


		if (this.parent.left == this){
			if(this.left==null){
				this.parent.left = null;
			}
			else{
			this.parent.left = null;
			this.parent.appendChild(this_left_temp);
		}
		}
		else{
			if(this.right==null){
				this.parent.right = null;
			}
			else{
			this.parent.right = null;
			this.parent.appendChild(this_right_temp);
		}
		}

		if (this_parent_temp.left==this){
			this.left=null;
			this.appendChild(this.parent);
			if(parent_right){
			this.appendChild(parent_right);
			}
			else{
				this.right=null;
			}
		}
		else{
			this.right=null;
			this.appendChild(this.parent);
			if(parent_left){
			this.appendChild(parent_left);
			}
			else{
				this.left=null;
			}
		}



		if(this.parent.parent.left==this_parent_temp){
			this.parent.parent.left=null;
			this.parent.parent.appendChild(this);
			
		}
		else{
			this.parent.parent.right=null;
			this.parent.parent.appendChild(this);
		}


		
		*/


		let parent_temp = this.parent;
		let parent_left = null;
		let parent_right = null;

		if(parent_temp.left!=this){
			parent_left = parent_temp.left;
		}
		if(parent_temp.right!=this){
			parent_right = parent_temp.right;
		}
				

		if (this.left){
			this.left.parent = this.parent;
			this.parent.left = this.left;
		}
		if (this.right){
			this.right.parent = this.parent;
			this.parent.right = this.right;
		}



		if (parent_temp.left && parent_temp.left!=this){
			parent_temp.left.parent=this;
			this.left=parent_temp.left;
			this.right = this.parent;
		}

		if (parent_temp.right && parent_temp.right!=this){
			parent_temp.right.parent=this;
			this.right=parent_temp.right;
			this.left = this.parent;
			
		}

		if (this.parent.parent){
			if(this.parent.parent.left==this.parent){
				this.parent.parent.left = this;
	
			}
			if(this.parent.parent.right==this.parent){
				this.parent.parent.right = this;
	
			}
		}



		
		let parent_parent_temp=this.parent.parent;

		this.parent.parent=this;

		this.parent = parent_parent_temp;


/*
		let parent_old= this.parent; // tmp var
		let parent_parent_old = parent_old.parent; //tmp variable 



		this.parent.parent = this;
		

		let right = this.right;
		let left = this.left;

		

		if (this.parent.right == this && this.parent.left){
			this.parent.left.parent=this;
			this.left = this.parent.left;
			this.right = this.parent;
			this.parent.left = left;
			this.parent.right = right;

		}
		else if(this.parent.left == this && this.parent.right){
			this.parent.right.parent=this;
			this.right = this.parent.right;
			this.left = this.parent;
			this.parent.left = left;
			this.parent.right = right;
		}
		*/



		


	}

	}
}

module.exports = Node;
