/*
Extraer elementos únicos y ordenarlos de menor a mayor.

Métodos: Set, sort(). */
const usua = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
console.log(new Set(usua.sort((a, b) => a.edad - b.edad)));