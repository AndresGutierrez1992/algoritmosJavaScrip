let siguiente;
let ultimo=1;
let anterior=1;
console.log(ultimo);
for (let i = 0; i < 20; i++) {

    siguiente=anterior+ultimo;
    console.log(siguiente);
    anterior=ultimo;
    ultimo=siguiente;

}