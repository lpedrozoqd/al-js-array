const words = [
    'spray',
    'limit',
    'elite',
    'exubarent',
    'elocuent'
];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6){
        newArray.push(element);
    }
}

console.log(newArray);
console.log("=============");
console.log(words);

const rta = words.filter(item => item.length >= 6);
console.log(rta);
console.log("=============");
console.log(words);


const rta2 = (query)=>{
    return words.filter(item =>{
        return item.includes(query);
    });
};
console.log("=============");
console.log(rta2('el'));
