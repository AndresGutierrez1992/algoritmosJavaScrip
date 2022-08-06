//arrays

const persona = ["andres", "albeiro", "gutierrez", "montoya"];
const carro = ["auto", 1992, true];
const carroPersona = [persona, carro];

console.log(carro[1]);

//objetos

const estudiante = {
  nombre: "andres",
  edad: 29,
  saludo: function () {
    console.log("hola guapo");
  },
};

const auto = {
  modelo: 1997,
  marca: "ford",
  encender: function () {
    console.log("carro encendido");
  },
  apagar: function () {
    console.log("carro apagado");
  },
};
 