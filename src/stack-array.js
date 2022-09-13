class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        return this.items.push(element);
    }

    pop() {
       return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    // devolve true se a pilha estiver vazia e false caso contrário
    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
        /*
        while(!this.isEmpty){
            this.pop();
        }
        */
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.clear();

console.log(stack);