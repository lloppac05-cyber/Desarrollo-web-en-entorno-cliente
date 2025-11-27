class Persona{
    constructor (name,age){
        this.name = name;
        this.age = age;
        //array estomago y esta vacio
        this.stomach = [];
    }
    //metodo para comer
    eat (someFood){
        if(this.stomach.length < 10){
            this.stomach.push(someFood);
        }
        else{
            console.log("No tengo hambre");
        }
    }

    //metodo para hacer caca
    poop (){
        this.stomach.pop();
    }

    //ver estomago, comida que se ha comido
    verStomach(){
        console.log(this.stomach);
    }

    //metodo toString para mostrar por pantalla
    toString(){
        return this.name + " tiene " + this.age + " años.";
    }
}

//probamos el funcionamiento
let person = new Persona("Mary", 50);
console.log(person.toString());
//Mary se va a comer una manzana llamando al metodo eat
person.eat("Manzana");
//vemos lo que se ha comido la persona
person.verStomach();
//eliminamos toda la comida
person.poop();
//volvemos a ver el estomago para comprobar que esta vacio
person.verStomach();