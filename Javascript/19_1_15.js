function myfun(){
    console.log("learning js");
}
myfun();
myfun();
myfun();
myfun();
function myfun2(msg){
    console.log(msg);
}
myfun2("hi all");

function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);

//counting vowels in given string
function countVowel(str){
    let count=0;
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u')
        {
            count++;
        }
    }
    console.log("no of vowels =",count);
}
countVowel("meera");

//using arrowfunction
const arrowvow=(str)=> {
    let count=0;
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u')
        {
            count++;
        }
    }
    console.log("no of vowels =",count);


}

//foreach array function
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});

// using arrow array function
let names=["hey","hi","hello"];
names.forEach((val)=>{
    console.log(val.toUpperCase());
});


//using MAP -creates a new array with the results of some operation.
let nums=[22,33,44];
let newarray=nums.map((val)=>{
   return val*val; 
});
console.log(newarray);


//FILTER method - creates a new array of elements that give true for a condition/filter
let array=[1,2,3,4,5,6,7];
let evenarray=array.filter((val)=>{
    return val%2==0;
});
console.log(evenarray);

//REDUCE method- return a single value after calculation
//print greatest number using reduce
let red=[1,2,3,4,5];
const output=red.reduce((res,curr)=>{
    return res>curr?res:curr;
});
console.log(output);



