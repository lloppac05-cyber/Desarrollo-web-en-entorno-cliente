/*
Ordenar un array de objetos según una propiedad.

const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
usuarios.sort((a, b) => a.edad - b.edad); */
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
console.log(usuarios.sort((a, b) => a.edad - b.edad));