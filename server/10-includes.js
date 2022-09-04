const numbers = [1,0,30,49,29,10,13];

let rta1 = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 69){ 
        rta1 = true;
        break;
    }
}

console.log('for: ',rta1);
console.log('includes: ',numbers.includes(59));