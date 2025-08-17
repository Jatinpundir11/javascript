let stringnumber='jatin'
console.log(typeof stringnumber)
let convtString=Number(stringnumber)
console.log( 
    convtString
)
//nan output[value] is shown when we covert values such as 'jatin123' string into number,also in case of undefined
let z;
let y=Number(z)
console.log(y) 
let a=2
console.log(typeof a)
b=Boolean(a)//there is any number output will be true other then 0 . whether it is negative one
console.log(b)
c=''
d=Boolean(c) //output will be false
e='jatin'
f=Boolean(e)//output will bw true
//hence 0>>false also empty string>>false wheres as 'string' and any numer other then 0 is true
g=123
h=String(g)
console.log(typeof h)// it will show string