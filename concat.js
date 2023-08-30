class Nodo {
    constructor(valor, next = null) {
        this.valor = valor;
        this.siguiente = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(nodo) {
        const newNodo = new Nodo(nodo)

        if (!this.head) {
            this.head = newNodo;
            this.tail = newNodo;
        } else {
            this.tail.siguiente = newNodo;
            this.tail = newNodo;
        }
    }

    peek(valor, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (current !== null) {
            if (current.valor === valor) {
                return true
            } else {
                return this.peek(valor, current.next)
            }
        }
        return false;
    }

    size(current = this.head, acum = 1) {
        if (this.head == null) {
            return 0;
        }

        if (current.siguiente !== null) {
            return this.size(current.siguiente, acum += 1)
        }

        return acum;
    }

    remove(valor, current = this.head) {
        if (this.head == null) {
            return false;
        }

        if (this.head.valor == valor) {
            return this.head = this.head.siguiente;
        }

        if (current.siguiente !== null) {
            if (current.siguiente.valor === valor) {
                current.siguiente = current.siguiente.siguiente;
                return true;
            } else {
                return this.remove(valor, current.siguiente)
            }
        }
    }

    print() {
        let node = this.head;
        //console.log(node);
        
        while (node != null) {
            console.log(`Valor ${node.valor} | Siguiente ${node.siguiente?.valor || null}`)
            node = node.siguiente
        }
    }

}

function ParaConcatenar(lista1, lista2) {
    const listaConcatenada = new LinkedList();

    let current1 = lista1.head;
    let current2 = lista2.head;

    while (current1 !== null && current2 !== null) {
        if (current1.valor < current2.valor) {
            listaConcatenada.append(current1.valor);
            current1 = current1.siguiente;
        } else {
            listaConcatenada.append(current2.valor);
            current2 = current2.siguiente;
        }
    }

    while (current1 !== null) {
        listaConcatenada.append(current1.valor);
        current1 = current1.siguiente;
    }

    while (current2 !== null) {
        listaConcatenada.append(current2.valor);
        current2 = current2.siguiente;
    }

    return listaConcatenada;
}

let lista1 = new LinkedList();
for(i=0 ; i <= 16; i+=2){
    lista1.append(i);
}

let lista2 = new LinkedList();
for(i=1 ; i <= 16; i+=3){
    lista2.append(i);
}

let nueva = ParaConcatenar(lista1, lista2);
console.log(nueva);