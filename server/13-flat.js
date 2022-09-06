const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const newArray =[];
for (let index1 = 0; index1 < matriz.length; index1++) {
    const elementArray = matriz[index1];

    for (let index2 = 0; index2 < elementArray.length; index2++) {
        const element = matriz[index1][index2];
        newArray.push(element);
    }
}

console.log("for: ", newArray);
const rta1 = matriz.flat();
console.log("flat: ", rta1 );

