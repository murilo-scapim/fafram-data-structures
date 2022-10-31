import { Node } from './node.js';

class LinkedList {
    constructor() {
        this.count = 0; // número de elementos da lista
        this.head = undefined; // referência ao primeiro elemento
    }

    // insere no final
    push(element) {
        const node = new Node(element);
        let current; // node atual

        // inserção na lista vazia
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            // obtem o último node
            while (current.next != null) {
                current = current.next;
            }
            // e atribui o novo node a next para criar a ligação
            current.next = node;
        }
        this.count++; // incrementa tamanho da lista
    }
}

const list = new LinkedList();
list.push(15);
list.push(10);

console.log(list);