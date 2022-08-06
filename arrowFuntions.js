let frases = [
  "los números pueden utilizarse como letras, y la frase resultante puede ser leida sin mucho esfuerzo",
  "Este es un mensage super encriptado y solo los mejores podrán leerlo",
];
let encriptar=(frase)=>{
  let resp= frase.toUpperCase();
  for (const letrs in resp) {
    resp=resp.replace(/E/g,"3")
    .replace(/A/g,"4").replace(/O/g,"0").replace(/G/g,"6")
    .replace(/T/g,"7")
    .replace(/I/g,"1").replace(/S/g,"5").replace(/Á/g,4)
  }
  return resp;
}
let resultado =frases.map(encriptar)
 console.log(resultado);




















// if (resp[letrs]==="E") {
//   resp=resp.replace(resp[letrs],"3")
// }
// if (resp[letrs]==="A") {
//   resp=resp.replace(resp[letrs],"4")
// }
// if (resp[letrs]==="Á") {
//   resp=resp.replace(resp[letrs],"4")
// }
// if (resp[letrs]==="S") {
//   resp=resp.replace(resp[letrs],"5")
// }
// if (resp[letrs]==="O") {
//   resp=resp.replace(resp[letrs],"0")
// }
// if (resp[letrs]==="G") {
//   resp=resp.replace(resp[letrs],"6")
// }
// if (resp[letrs]==="I") {
//   resp=resp.replace(resp[letrs],"1")
// }
// if (resp[letrs]==="T") {
//   resp=resp.replace(resp[letrs],"7")
// }




// let encriptado = (frase) => {
//   let mayusculas = frases[0].toUpperCase() + frases[1].toUpperCase();
//   for (const letra in mayusculas) {
//     if (mayusculas[letra] === "S") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "5");
//     }
//     if (mayusculas[letra] === "E") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "3");
//     }
//     if (mayusculas[letra] === "A") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "4");
//     }
//     if (mayusculas[letra] === "Á") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "4");
//     }
//     if (mayusculas[letra] === "O") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "0");
//     }
//     if (mayusculas[letra] === "T") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "7");
//     }
//     if (mayusculas[letra] === "I") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "1");
//     }
//     if (mayusculas[letra] === "G") {
//       mayusculas = mayusculas.replace(mayusculas[letra], "6");
//     }
//   }
//   return mayusculas;
// };

// console.log (frases.map(encriptado));





// let mayusculas = frases[0].toUpperCase() + frases[1].toUpperCase();

// for (const letra in mayusculas) {
//   if (mayusculas[letra] === "E") {
//     mayusculas = mayusculas.replace(mayusculas[letra], "3");
//   }
// }
// console.log(mayusculas);

// const relevos="4530617"
// for (let i = 0; i < frasesMayusculas.length; i++) {
//   if (frasesMayusculas[i]==="E") {
//     frasesMayusculas= frasesMayusculas.replace(frasesMayusculas[i],"3")

//   }

// }

// console.log(frasesMayusculas)
