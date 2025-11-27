//clase que hereda de Lambdasia
class Instructor extends Lambdasian {
    //constructor de la clase
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        //llamamos al super
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    //metodo demo
    demo(subject) {
        return "Today we are learning about " + subject;
    }

    //metodo grade
    grade(student, subject) {
        return student.name + "receives a perfect score on " + subject;
    }
}

//probamos el funcionamiento
let instructor = new Instructor("Carmen",40,"Canarias","Redux","JavaScript","Me encanta JavaScript");

//Usar método heredado (.speak())
console.log(instructor.speak());

//Usar método .demo()
console.log(instructor.demo(instructor.specialty));

//Usar método .grade()
//console.log(instructor.grade(student, instructor.specialty));

//Mostrar la frase característica
console.log(instructor.catchPhrase);