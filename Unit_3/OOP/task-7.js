//Ajusta aleatoriamente la calificación de un estudiante entre -10 y +10
    function adjustGrade(student){
        // Genera un número aleatorio entre -10 y +10
        let aleatorio = Math.floor(Math.random() * 21) - 10; 
        let newGrade = student.grade + aleatorio;

        // Asegura que la calificación se mantenga entre 1 y 100.
        if (newGrade > 100) {
            newGrade = 100;
        }
        if (newGrade < 1) {
            newGrade = 1; 
        }
        student.grade = newGrade;
        let calificacion = "";
        if (aleatorio > 0) {
            calificacion = this.name + " le otorga " + change + " puntos extra a " + student.name + 
                "\nNueva calificación: " + student.grade;
        } else if (change < 0) {
            calificacion = this.name + " le resta " + Math.abs(change) + " puntos a " +
                student.name + "por errores" +  "\nNueva calificación: " + student.grade;
        } else {
            calificacion = this.name + "revisa las notas de " + student.name + " y no encuentra cambios. \nCalificación: " 
            + student.grade;
        }
        return calificacion;
    }
    //comprobar si el estudiante se puede graduar
    //mas de un 70 por ciento
    function graduate(){
        let salida = "";
        if (this.grade >= 70) {
            salida = this.name + " se gradúa de IES Francisco Ayala con una calificación de " + this.grade;
        } else {
            salida = this.name + " tiene un " + this.grade + "\nNecesita mejorar su puntuación (mínimo 70%)";
        }
        return salida;
    }
    
    // Intento de graduación
    console.log(student.graduate());

    // Bucle para ajustar la calificación del estudiante para que pueda graduarse
    let gradua = 0;
    while (student.grade < 70 && gradua < 10) {
    gradua++;
    console.log("\n--- Intento de Graduación " + (gradua + 1));
    console.log(project.adjustGrade(student)); 
    console.log(student.graduate());
    }

    if (student.grade >= 70) {
    console.log("\n El estudiante se ha graduado");
    } else {
    console.log("\nEl estudiante no se gradua");
    }