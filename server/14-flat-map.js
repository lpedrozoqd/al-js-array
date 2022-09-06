const users = [
    {userId:1, userName: "Tom", attributes : ["Nice","Cute"]},
    {userId:2, userName: "Mike", attributes : ["Lovely"]},
    {userId:3, userName: "Nico", attributes : ["Nice","cool"]},
];

const rta1 = users.map(user => user.attributes);
console.log('attributes: ', rta1);
console.log("=================");
const rta11 = rta1.flat();
console.log('rta11: ', rta11);
console.log("=================");
//const rta2 = users.flatMap(user => user.attributes);
//console.log('rta2: ', rta2);

const calendars = {
    primaryCalendar : [
        {
            startDate : new Date(2022,1,1,15),
            endDate : new Date(2021,1,1,15,30),
            title : "Cita 1"
        },
        {
            startDate : new Date(2022,1,1,17),
            endDate : new Date(2021,1,1,15,130),
            title : "Cita 2"
        },
    ],
    secondaryCalendar : [
        {
            startDate : new Date(2021,1,1,12),
            endDate : new Date(2021,1,1,12,30),
            title : "Cita 3"
        },
        {
            startDate : new Date(2022,1,1,9),
            endDate : new Date(2021,1,1,10),
            title : "Cita 4"
        },
    ]
};


const calendarKeys= Object.keys(calendars);
console.log('keys: ', calendarKeys);
console.log("=================");
const calendarValues= Object.values(calendars);
console.log('Values: ', calendarValues);
console.log("=================");
const calendarValuesFlat= Object.values(calendars).flat();
console.log('calendarValuesFlat: ', calendarValuesFlat);
console.log("=================");
const calendarValuesFlatMap= Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log('calendarValuesFlatMap: ', calendarValuesFlatMap);
