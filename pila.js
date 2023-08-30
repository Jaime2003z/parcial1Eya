//Recomendación para probar copie el codigo de la linea 1 hasta la 52 
//en la consola del navegador
class Pila {
    constructor() {
        this.pila = [];
    }
    push(elemento) {
        this.pila.push(elemento);
        return this.pila;
    }

    pop() {
        return this.pila.pop();
    }

    peek() {
        return this.pila[this.pila.length - 1];
    }

    size() {
        return this.pila.length;
    }

    isEmpty() {
        return this.pila.length === 0;
    }

    print() {
        return this.pila;
    }

    //Agrego la funcion que invierte los elementos de la cola
    Invert() {
        this.pila = this.pila.reverse();
        return this.pila;
    }
}

//Creo un elemento de cola
let pila_datos = new Pila();

//Le agrego datos
pila_datos.push(1.1);
pila_datos.push(2.2);
pila_datos.push(3.3);
pila_datos.push(4.4);
pila_datos.push(5.5);
pila_datos.push(6.6);
pila_datos.push(7.7);
pila_datos.push(8.8);
pila_datos.push(9.9);
pila_datos.push(10.10);

//¡ATENCIÓN! En este punto recomendamos que pruebe los elemntos de este modo
//Primero luego de haber ingresado el codigo arriba pruebe este
pila_datos.print();

//Luego este (Creo que imprime los datos ya invertidos)
pila_datos.Invert();

//Finalmente este
pila_datos.print();