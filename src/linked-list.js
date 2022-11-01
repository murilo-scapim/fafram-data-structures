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

    // busca de um nó pela posição
    getElementAt(index){
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index && current != null; i++) {
                current = current.next; // anda na lista
            }
            // ao sair do laço, o nó atual será o nó na posição index
            return current;
        }
        return undefined; // posição que não existe
    }

    removeAt(index) {
        // verificação se esse índice é válido
        if (index >= 0 && index < this.count) {
            let current = this.head;

            // remoção do nó no início da lista
            if (index == 0) {
                this.head = current.next;
            } else { // removendo o último ou do meio
                const previous = this.getElementAt(index - 1); // recuperar o nó anterior
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.push(20);
list.push(25);

console.log(list);

console.log(list.getElementAt(2));
console.log(list.getElementAt(4));
console.log(list.removeAt(3));
console.log(list.removeAt(3));