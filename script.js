console.log("Hello, World!")

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

const typeToConsole = (arr, arr2) => 
{
    for (let index = 0; index < arr.length; index++) {
        console.log(`Type of ${arr2[index]} is ` + typeof (arr[index]));
    }
}

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