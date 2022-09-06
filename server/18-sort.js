const months = ["March","Jan","Feb","Dec"];
const numbers = [1,30,4,21,100000];
const words = ["réservé","premier","comuniqué","café","adieu",""];
const orders = [
    {
        customerName : "Nicolás",
        total: 600,
        delivered : true
    },
    {
        customerName : "Leo",
        total: 5,
        delivered : false
    },
    {
        customerName : "Rebe",
        total: 700,
        delivered : false
    },
    {
        customerName : "Zuelema",
        total: 120,
        delivered : false
    }
];

console.log("months: ", months.sort());
console.log("=============");
console.log("numbers (no adecuada para números): ", numbers.sort());
console.log("=============");
console.log("numbers (ADECUADA para números [ascendente]): ", numbers.sort((a,b)=> a-b));
console.log("=============");
console.log("numbers (ADECUADA para números [descendente]): ", numbers.sort((a,b)=> b-a));
console.log("=============");
orders.sort((a,b)=> b.total - a.total);
console.log("orders by total (desc): ", orders);
orders.sort((a,b)=> a.total - b.total);
console.log("orders by total (asc): ", orders);
