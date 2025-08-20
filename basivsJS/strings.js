let name="jatin rana"//FIRST METHOD TO DEFINE THE STRING
let coderepo='12'
console.log(name+coderepo); //STRING CONCATINATION
console.log(`MY NAME IS ${name} and i have ${coderepo} github repos`);//only workks in backticks mostly used in backens
let name2=new String("rana-atul-pratap-pundir")
console.log(name2[0])
console.log(name2.__proto__) //to see the protoype but we can also use string function by variable name
console.log(name2.length);
console.log(name2.charAt(2));
console.log(name2.toLocaleUpperCase());
const newstring=name2.substring(0,4)
console.log(newstring)
//if you want to use negative values then use slice?? also positive values can be included
const anotherstring=name2.slice(-11,-2)
//++++.trim()-function is used to trim the starting and engding spaces
const url="https://jatin@12rana.com"
console.log(url.replace("@12","-"))
console.log(url.includes('jatin'))
//string to array conversion
console.log(name2.split('-'))