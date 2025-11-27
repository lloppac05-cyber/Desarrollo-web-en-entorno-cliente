//clase que herade de instructor
class ProjectManager extends Instructor {
    //constructor de la clase
    constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
        //llamamos al super
        super(name,age,location, specialty,favLanguage,catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    //Método que anuncia el inicio del stand-up
    standUp(channel) {
        return this.name + "announces to " + channel + " @channel standy times";
    }

    //Método que simula la depuración de código de un estudiante
    debugsCode(student, subject) {
        return this.name + " debugs " + student.name + " s code on " + subject;
    }
}

//comprobar el funcionamiento
let project = new ProjectManager("Joan",52,"Barcelona","Programador","Python","Todo tiene solucion","CS1","Joe");

//Método heredado de Lambdasian (.speak())
console.log(project.speak());

//método heredado de Instructor (.demo())
console.log(project.demo("Daily Scrums"));

//Método (.standUp())
console.log(project.standUp("#product-dev-3"));

// MétodO (.debugsCode())
console.log(project.debugsCode(student, 'Routing Logic'));
 
//Método heredado de Instructor (.grade())
console.log(project.grade(student, 'Team Alignment'));