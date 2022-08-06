let suma = (num1, num2) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
        console.log("la primera gueva que quiere sumar letras");
        return 0;
      }
   return num1 + num2;
}

console.log(suma("a",1))


let resta = (num1, num2) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
        console.log("la primera gueva que quiere restar letras");
        return 0;
      }    
      return num1 - num2;
}

function multiplicacion(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    console.log("la primera gueva que quiere multiplicar letras");
    return 0;
  }
  const resul = num1 * num2;
  return resul;
}


let division = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    console.log("la primera gueva que quiere dividir letras");
    return 0;
  }
  if (num2 === 0 || num1 === 0) {
    console.log("no se puede dividir por cero R");
    return 0;
  }
  return num1 / num2;
};

let t = "cola";
console.log(division(t, 2));


