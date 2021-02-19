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

// 3. Вывел все созданные переменные
console.log(` ${num} \n ${str} \n ${undefVar}\n`, symbol, 
`\n ${isAdmin} \n ${varNull} \n ${user}`)

// Функция для вывода типа переменной в консоль, вместе с именем этой переменной
const typeToConsole = (arr, arr2) => 
{
    for (let index = 0; index < arr.length; index++) {
        console.log(`Type of ${arr2[index]} is ` + typeof(arr[index]));
    }
}

// 4. Вывести через оператор тайпоф 
console.log(typeof num);
// 4. Вывести через функцию тайпоф
typeToConsole([str,num,undefVar,symbol,isAdmin, varNull, user], 
    ["str", "num", "undefVar", "symbol", "isAdmin", "varNull", "user"]);


// 5. Меняю переменную конст типа 
//const varToChange = "try to change me"
// varToChange = "changed"

const objToChange = 
{
    name: "myName",
    something: 33
}

// 6. Меняю объект const 
objToChange.something = 20
console.log(objToChange.something)

let objToChange2 = 
{
    spec: "jaj"
}
// 7. Меняю объект let
objToChange2.spec = 3
console.log(objToChange2)

var changeMe = 
{
    yes: "no"
}
// 8. Меняю объект var
changeMe.yes = "yes"
console.log(changeMe)