const elements = ["Fire","Air","Water"];
const separator = '--';
let rtaFinal1 = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal1 = rtaFinal1 + element + separator;
}

console.log('for: ', rtaFinal1);
console.log('join: ',elements.join('--'));

const title = "Curso de maniuplación de arrays";
console.log(title.split(' '));
console.log(title.split(' ').join('-').toLowerCase());
