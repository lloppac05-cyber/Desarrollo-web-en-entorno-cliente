/*Transformar un array de objetos en un array de una sola propiedad.
const personas = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];
// Resultado esperado: ["Ana", "Luis"]
Método: map().
 */
const personas = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];
let nombres = personas.map(persona => persona.nombre);
console.log(nombres);