const numbers = [1,0,30,49,29,10,13];
let rta1;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 3330){
        rta1 = element;
        break;
    }
    
}

console.log('for: ', rta1);
let rta2 = numbers.find(item => item === 30);
console.log('find: ', rta2);
let rta3 = numbers.findIndex(item => item === 30);
console.log('findIndex: ', rta3);


