// 1. Вывести строку в терминал
console.log("Hello, World!")

// 2. Создать переменную каждого типа

let num = 43;
let str = "some string type stuff";
let undefVar;
let symbol = Symbol("j");
let isAdmin = true;
let varNull = null;


let user = {
    name: "Maksim",
    surname: "Maksimovich",
    age: 23
}

console.log(` ${num} \n ${str} \n ${undefVar}\n`, symbol, 
`\n ${isAdmin} \n ${varNull} \n ${user}`)

// Функция для вывода типа переменной в консоль, вместе с именем этой переменной
const typeToConsole = (arr, arr2) => 
{
    for (let index = 0; index < arr.length; index++) {
        console.log(`Type of ${arr2[index]} is ` + typeof (arr[index]));
    }
}

// 3. 
console.log(typeof num);
typeToConsole([str,num,undefVar,symbol,isAdmin, varNull, user], 
    ["str", "num", "undefVar", "symbol", "isAdmin", "varNull", "user"]);

// const varToChange = "try to change me"
// varToChange = "changed"

const objToChange = 
{
    name: "myName",
    something: 33
}

objToChange.something = 20
console.log(objToChange.something)

let objToChange2 = 
{
    spec: "jaj"
}
objToChange2.spec = 3
console.log(objToChange2)

var changeMe = 
{
    yes: "no"
}
changeMe.yes = "yes"
console.log(changeMe)