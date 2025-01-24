//PRACTICE TEST
//in a array of marks of students, filter out of the marks of students that scored 90
let marksofst=[97,87,88,99,88,77,98,77];
let above=marksofst.filter((val)=>{
    return val>90;
});
console.log(above);

//take a number n as input from user. create an array of numbers from 1 to n.
//use the reduce method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all numbers in the array
let numb=prompt("enter n:");
let numArray=[];
for(let i=0;i<numb;i++){
    numArray[i]=i+1;
}
console.log(numArray);
let sumArray=numArray.reduce((res,curr)=>{
    return res+curr;
});

let productArray=numArray.reduce((res,curr)=>{
    return res*curr;
});

console.log("sum of the array=",sumArray);
console.log("product of array=",productArray);
