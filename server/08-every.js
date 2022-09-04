const numbers = [1,30,49,29,10,13];

let rta1 = true;
for (let index = 0; numbers < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40){
        rta1 = false;
    }
}

console.log('for: ', rta1);
console.log("==========");

const rta2 = numbers.every(item => item <= 49);
console.log('every: ', rta2);