class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    // remove e devolve o elemento
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
    
    // esvazia a pilha removendo todos os elementos
    clear() {
        this.items = [];
        /*
        while (!this.isEmpty()) {
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
stack.peek();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek()); // elemento do topo, último elemento adicionado
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());

console.log(stack);