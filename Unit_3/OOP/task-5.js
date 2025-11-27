//clase heredada
class Student extends Lambdasian {
    //constructor de la clase
    constructor(name, age, location, previousBackground, className, favSubjects) {
        //llamamos al super
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    //metodo para listar las materias
    listSubjects() {
    //join(', ') para unir el array en una cadena
        return this.favSubjects.join(', ');
    }

    //metodo prassignment recibe un subject como parametro
    PRAssignment(subject) {
        return this.name + " has submitted a PR for " + subject;
    }

    //metodo que simula el sprint challenge
    sprintChallenge(subject) {
        return this.name + " has begun sprint challenge on " + subject;
    }
}

//prueba del funcionamiento
let student = new Student("Julian",28,"Madrid", "Barista","CS132",['HTML', 'CSS', 'JS']);

//Método heredado (.speak())
console.log(student.speak());

//Método .listSubjects()
console.log(student.listSubjects());

// Método .PRAssignment()
console.log(student.PRAssignment("HOLA"));

//Método .sprintChallenge()
console.log(student.sprintChallenge("Prefiero java"));

let instructor2 = new Instructor("Carmen",40,"Canarias","Redux","JavaScript","Me encanta JavaScript");

//metodo grade
console.log(instructor2.grade(student, " JavaScript love"));
