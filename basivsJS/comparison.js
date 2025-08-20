//comparisons output will be in boolean value,datatype need to be same
//simple conversion
//console.log(1>2)
//console.log(1==1)
//tricky compariaons
//converts into same datatype then checks and do comparisons thats why resultsare unpredictable
console.log('2'<3
)--//converted it into numbers
console.log(3>'2')--//converted into numbers
//null anomaly
console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true
//the reason is that the equity check (==) and comaprison operators <,>,<=,>= works differently ,here in comaprisons operators 
//compares null to a number teating it as zero, thats why output is true in third case
//undefined anomoly
console.log(undefined ==0) //in all cases it return false
//===strict equal----->also check datatype
console.log(2==="2")
