//there are two types of datatype:
//primitive and non primitive on the bases on how data is stored and access in the memory(stack and heap cocept)
//primitive---here the value is provided not refernce and change in var changes in copy
//////7 types: 1)string 2)number 3)undefined 4)boolean 5)null 6)symbol 7)bigint 
//non primitive--also reference type---reference directly allocated in memory 1)array 2)objects 3)functions

//javascript is dynamically type
//symbol
let a=Symbol("123")
let b=Symbol("123")
console.log(a==b)//false because of symbol
//bigint
//2pov53 ,,,,,,number can accuraterly rep upto 15 digits
let bignumber=122332324242n
//array
let heros=['cat','dog']
//object in curly braces key value seprated by commas
let myobj={
    name:'jatin',
    surname:'rana'
}
const myfunction=function(){
    console.log('hello world')
}
