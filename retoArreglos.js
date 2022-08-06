//metodos de instancia

const estudiantes=["ana","manuela","raul","carolina","maria","antonio","cristina"];

console.log("se encontró lo siguiente que empieza por a:");


for (let i = 0; i < estudiantes.length; i++) {

    if (estudiantes[i][0]==="a") {

        console.log(estudiantes[i])
    }else{
        console.log("0");
    }

}


console.log("nombres con mas de 6 letras:");


for (let i = 0; i < estudiantes.length; i++) {

    if (estudiantes[i].length>6) {

        console.log(estudiantes[i]);
    }else{

        console.log("0");
    }

}


