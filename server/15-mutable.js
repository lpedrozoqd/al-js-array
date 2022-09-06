const products = [
    {title:"Pizza",price:121, id:"12"},
    {title:"Burger",price:131, id:"13"},
    {title:"Hot cakes",price:101, id:"14"},
];

const myProducts = [];

console.log('products: ', products);
console.log("=============");
console.log('myProductos: ', myProducts);
console.log("=============");

const product = products.find(item => item.id === "14");
const productIndexPos = products.findIndex(item => item.id === "14");
if (productIndexPos !== -1){
    myProducts.push(products[productIndexPos]);
    //Elimino del array el elemento
    products.splice(productIndexPos,1)
}

console.log("product: ", product);
console.log("=============");
console.log('myProductos: ', myProducts);
console.log("=============");
console.log('products: ', products);

const updateProductV2 = {
    id: 12,
    changes : {
        price: 200,
        description: "delicioso"
    }
};

const productsV2 = [
    {title:"Pizza",price:121, id:"22"},
    {title:"Burger",price:131, id:"23"},
    {title:"Hot cakes",price:101, id:"24"}
];

console.log("=============");
console.log('productsV2 -antes-: ', productsV2);

const productIndexPosV2 = productsV2.findIndex(item => item.id === "22");

if (productIndexPosV2 !== -1){
    productsV2[productIndexPosV2] = updateProductV2;    
}        

console.log("=============");
console.log('productsV2 -después de actualización-: ', productsV2);

const productsV3 = [
    {title:"Pizza",price:121, id:"32"},
    {title:"Burger",price:131, id:"33"},
    {title:"Hot cakes",price:101, id:"34"}
];

console.log("=============");
console.log('productsV3 -antes de actualización-: ', productsV3);

const productV3 = {
    id: 32,
    changes : {
        price: 200,
        description: "delicioso"
    }
};

const productIndexPosV3 = productsV3.findIndex(item => item.id === "32");
//Con split operation, me ubico en la posición a modificar y envío los datos correspondiente así:
productsV3[productIndexPosV3] = {
    ...productsV3[productIndexPosV3],
    ...productV3.changes
};
console.log("=============");
console.log('productsV3 -después de actualización-: ', productsV3);
