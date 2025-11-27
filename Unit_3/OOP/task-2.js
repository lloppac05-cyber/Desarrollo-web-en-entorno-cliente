class Car {
    //Constructor de la clase
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        // Instanciamos el combustible y km
        this.tank = 0;
        this.odometer = 0;
    }

    //metodo para añadir galones al tanque
    fill(gallons) {
        //si los galones son positivos los añadimos al tanque
        if (gallons > 0) {
        this.tank += gallons;
        }
        //sino, quiere decir que son negativos entonces añadimos 0
        else{
            this.tank += 0;
        }
    }

    //metodo para conducir
    drive(distance) {
        // Calcular el combustible necesario para la distancia total
        const fuel = distance / this.milesPerGallon;
        let message = "";
        // si el tanque puede recorrer la distancia
        if (fuel <= this.tank) {
            //restamos el combustible consumido
            this.tank -= fuel;
            //sumamos la distancia al km
            this.odometer += distance;
            message = "Kilometraje actual " + this.odometer + " km y en el tanque quedan " + this.tank + "litros"; 
        } 
        else {
            //distancia restante por recorrer
            const actualDistance = this.tank * this.milesPerGallon;
        
            //Actualizar el odómetro
            this.odometer += actualDistance;
        
            //Vaciar el tanque
            this.tank = 0;
    
            message = "I ran out of fuel at " + this.odometer.toFixed(2) + "miles!";
        }
        return message;
    }

    //metodo to string para mostrar por pantalla
    toString(){
        return "Modelo del coche: " + this.model + "\n Rendimiento: " + this.milesPerGallon + "\n Odometro: " + this.odometer.toFixed(2) + "\n Tanque: " + this.tank.toFixed(2);
    }
}

//probamos el funcionamiento
//creamos un objeto coche
const seat = new Car("Seat Ibiza", 50);
//lo mostramos por pantalla
console.log(seat.toString());

//llenamos el tanque
seat.fill(15);

//conducimos
seat.drive(200);

//mostramos por pantalla con el tanque que queda y los km que se han recorrido
console.log(seat.toString());