const letters = ['a','b','c','d'];
const newArray =[];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log("----------");
console.log(letters);
console.log("----------");
console.log(newArray);

const newArray2 = letters.map(item => item + "??");
console.log("----------");
console.log(newArray2);

