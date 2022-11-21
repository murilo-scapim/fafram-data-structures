import LinkedList from "./linked-list.js";
import { DoublyNode } from './doubly-node.js';

/* Como a Lista Duplamente Ligada também é uma Lista Ligada
estendemos LinkedList

Herdará todas as propriedades e métodos da classe LinkedList
*/
class DoublyLinkedList extends LinkedList {
    constructor() {
        super(); // chama o construtor da superclasse (classe herdada)
        this.tail = undefined; // último elemento da lista
    }

    // Método sobreescrito aqui na classe filha
    // Insere um elemento no final
    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) { // se lista vazia
            this.head = node;
            this.tail = node;
        } else {
            // insere na caúda da lista (tail)
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }
  
    // Remove um elemento de qualquer posição
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) { // primeiro cenário, remoção do início
                this.head = current.next; // aponta para o próximo elem
                // se houver apenas um item, precisa atualizar tail
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) { // remover no final da lista
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else { // terceiro cenário, remoção do meio da lista
                current = this.getElementAt(index);
                const previous = current.prev;
                // faz a ligação de previous com o next de current, pula o elem para remover
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

const obj = new DoublyLinkedList();
obj.push(10);
obj.push(15);
obj.push(20);

console.log(obj);

// Métodos herdados da classe pai
console.log(obj.show());
//console.log(obj.size());
