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

    shift() {
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

    pop() {
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

    has(value) {
        let current = this.head;
        while(current) {
            if(value === current.data) return current;

            current = current.next;
        }
        return null;
    }

    get(index) {
        if(index < 0 || index >= this.size) {
            return console.error('invalid index')
        }

        let i = 0;
        let current = this.head;

        while(current !== null && i < index) {
            current = current.next;
            i++;
        }
        return current !== null ? current : null;
    }

    remove(index) {
        if(index < 0 || index >= this.size) {
            return console.error('Invalid index');
        } else if (index === 0) {
            this.deleteHead()
        } else if(index === this.length - 1) {
            return this.deleteTail();
        } else {
            const previous = this.getByIndex(index - 1);
            const current = previous.next;
            previous.next = current.next;
            this.size--;
        }
    }

    size() {
        return this.size;
    }

    data() {
        let dataArray = [];
        let current = this.head;
        while(current) {
            dataArray.push(current.data)
            current = current.next;
        }
        return dataArray;
    }
}