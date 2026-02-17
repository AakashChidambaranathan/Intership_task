function rev(word){
    return word.split("").reverse().join("");
}

const { areIntervalsOverlapping } = require("date-fns");
const { moveItem } = require("framer-motion");

console.log(rev("Aakash"))

function pallnerom(word){
    let rev=word.split("").reverse().join("");
    return rev===word
}

console.log(pallnerom("gfg"))

function find_largest(arr){
    let largest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

console.log(find_largest([99,44,33,33,11]))

function great(name,callback){
    callback (`Hello ${name}!`)
}

great('aakash',message=>  console.log(message));

const obj={name:"Aakash"};
obj.age=45;
console.log(obj.name)
console.log(obj.age)


function add(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum
}

console.log(add([3,2,3,4,5,3,2]))

function fifb(num){
    let num1=0,num2=1,nextnum;
    console.log("fibonocy")
    for(let i=1;i<=num;i++){
        console.log(num1);
        nextnum=num1+num2;
        num1=num2;
        num2=nextnum;
    }
}
fifb(7)

