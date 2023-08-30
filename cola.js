//Recomendación para probar copie el codigo de la linea 1 hasta la 52 
//en la consola del navegador
class Cola {
    constructor() {
        this.cola = [];
    }
    enqueue(elemento) {
        this.cola.push(elemento);
        return this.cola;
    }

    dequeue() {
        return this.cola.shift();
    }

    peek() {
        return this.cola[0];
    }

    size() {
        return this.cola.length;
    }

    isEmpty() {
        return this.cola.length === 0;
    }

    print() {
        return this.cola;
    }

    //Agrego la funcion que invierte los elementos de la cola
    Invert() {
        this.cola = this.cola.reverse();
        return this.cola;
    }
}

//Creo un elemento de cola
let cola_datos = new Cola();

//Le agrego datos
cola_datos.enqueue(1.1);
cola_datos.enqueue(2.2);
cola_datos.enqueue(3.3);
cola_datos.enqueue(4.4);
cola_datos.enqueue(5.5);
cola_datos.enqueue(6.6);
cola_datos.enqueue(7.7);
cola_datos.enqueue(8.8);
cola_datos.enqueue(9.9);
cola_datos.enqueue(10.10);

//¡ATENCIÓN! En este punto recomendamos que pruebe los elemntos de este modo
//Primero luego de haber ingresado el codigo arriba pruebe este
cola_datos.print();

//Luego este (Creo que imprime los datos ya invertidos)
cola_datos.Invert();

//Finalmente este
cola_datos.print();