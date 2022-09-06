const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for: ', newArray);
const rta1 = elements.concat(othersElements);
console.log('concat: ', rta1);
const rta2 = [...elements, ...othersElements];
console.log('concat 2 arrays: ', rta2);
