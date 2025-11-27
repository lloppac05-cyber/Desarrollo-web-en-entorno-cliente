class Lambdasian {
    //constructor de la clase
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    //instancia speak y devuelve una frase
    speak() {
        return "Hello my name is " + this.name + ". I am from " + this.location;
    }
}

//probamos el funcionamiento
//creamos un objeto de la clase
let persona1 = new Lambdasian("Alfredo",35,"Marbella");

//Llamar al método .speak()
console.log(persona1.speak()); 