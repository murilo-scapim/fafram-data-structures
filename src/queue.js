class Queue {
    constructor() {
        this.items = {}; // objeto estrutura chave/valor
        this.count = 0;
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
}

const queue = new Queue();
queue.enqueue('Matheus');
queue.enqueue('Caio');
queue.enqueue('Anderson');

console.log(queue);