const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize||30;
		this.heap=new MaxHeap();
		}

	push(data, priority) {
		heap.push(data, priority);

	}

	shift() {
		return heap.pop();

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
