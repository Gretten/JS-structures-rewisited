class Node {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev || null;
        this.next = next || null; 
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = this.tail = null;
    }

    append(data) {
        if(!this.tail) {
            this.tail = this.head = new Node(data)
        } else {
            let oldTail = this.tail;
            this.tail = new Node(data);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
        this.size++;
    }

    prepend(data) {
        if(!this.head) {
            this.head = this.tail = new Node(data)
        } else {
            let oldHead = this.head;
            this.head = new Node(data);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
        this.size++;
    }

    deleteHead() {
        if(!this.head) {
            return;
        }
        else {
            this.size--;
            let removedHead = this.head;
            if(this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removedHead.value;
        }
    }

    deleteTail() {
        if(!this.tail) {
            return;
        }
        else {
            this.size--;
            let removedTail = this.tail;
            if(this.tail === this.head) {
                this.tail = this.head = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail.value;
        }
    }
    search(value) {
        let current = this.head;
        while(current) {
            if(value === current.data) return current;

            current = current.next;
        }
        return null;
    }

    getSize() {
        return this.size;
    }

    printData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}