class Queue {
	constructor() {
		this.count = 0; // tamanho da fila
		this.lowestCount = 0; // chave do primeiro elemento
		this.items = {}; // propriedade items é um objeto, coleção de pares chave e valor
	}

	// adiciona elementos no final da fila
	enqueue(element) {
		this.items[this.count] = element; // chave e valor
		this.count++;
	}

	size() {
		return this.count - this.lowestCount;
	}

	// devolve true se a fila estiver vazia e false caso contrário
	isEmpty() {
		return this.size() === 0;
	}

	// remove elementos no início da fila
	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.items[this.lowestCount]; // armazena o valor do início da fila
		delete this.items[this.lowestCount]; // operador delete remove uma propriedade de um objeto
		this.lowestCount++;
        this.count--;
	}

	/*
	items = {
		0: 5,
		1: 8
	};
	count = 2;
	lowestCount = 0;
	*/

	// elemento do início da fila
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.lowestCount];
	}

	// limpar a fila
	clear() {
		// reinicia o valor das propriedades da classe
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}
}

const queue = new Queue();
//console.log(queue.isEmpty());
queue.enqueue('Matheus');
queue.enqueue('Caio');
queue.enqueue('Anderson');
//console.log(queue.size());
//console.log(queue.isEmpty());
queue.dequeue() // remove Matheus
queue.dequeue(); // remove Caio
console.log(queue);

// queue.clear();