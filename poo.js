const gato ={
nombre: "valiente",
duerme: true,
edad: 10,
enemigos: ["agua","perros"],

comer(comida){

return `${this.nombre} esta comiendo ${comida}`;

},


};

console.log(gato.comer("pez"));