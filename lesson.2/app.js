"use script";

// Brinchi masalla:

// const object = {
//     name: "Shaxzod",
//     age: 25,
//     userJob: "JavaScript Developer",
// }

// console.log(object);

let userName = {user: "Shaxzod"};
let userAge = {age: 25};
let userJob = {job: "JavaScript Developer"};

console.log(Object.assign(userName, userAge, userJob));

const ObjectGroup = (Object.assign(userName, userAge, userJob));
console.log(ObjectGroup);

// /Ikkinchi masalla

const phoneNumber = {
    user1: 1111111,
    user2: 2222222,
    user3: 3333333,
    user4: 4444444,
    user5: 5555555,
    user6: 6666666,
    user7: 7777777
};

let arrKeys = (Object.keys(phoneNumber)); 
console.log(arrKeys);

// Uchinchi masalla

const salary = {
    ali: 160,
    vali: 220,
    anvar: 250
};

let sum = 0;
for (let key in salary) {
    sum += salary[key];
}

console.log(sum);