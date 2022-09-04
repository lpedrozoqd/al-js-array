const orders = [
    {
        customerName: "Leo",
        total:60,
        delivered:true,
    },
    {
        customerName: "Rebeca",
        total:160,
        delivered:true,
    },
    {
        customerName: "Angela",
        total:260,
        delivered:false,
    },
];

/*
const rta = orders.map(item => item.total);
console.log("-------");
console.log(rta);


const rta2 = orders.map(item=>{
    item.tax = .19;
    return item;
});


console.log("-------");
console.log(rta2);
  
console.log("-------");
console.log(orders);
*/

//Para evitar una referencia de memoria:
const rta3 = orders.map(item=>{
    //Aquí 'clonamos' con 'spread operator' y generamos un nuevo objeto en memoria
    return {
        ...item,
        tax: .19
    };
});

console.log("///////////");
console.log(rta3);
console.log("///////////");
console.log(orders);

/*
//Para agregar un nuevo atributo sin mutar, también se puede 
//hacer de esta otra forma. Es exactamente lo mismo pero a mi parecer un poco mas limpio
const rta4 = orders.map(item => ({
    ...item,
    tax: 0.19
}));
*/