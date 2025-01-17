let marks= [97,87,99,76,65];
console.log(marks);
console.log(marks.length);
let names=["sam","dad","mom","bro"];
console.log(names);
//for loop
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}
//for of 
for(let el of marks){
    console.log(el);
}

//finding average marks of an array
let score=[22,33,44,55,43,22];
let sum=0;
for(let i of score){
    sum=sum+i;
}
console.log(sum);
let avg=sum/score.length;
console.log(avg);

//applying offers on items and changing values of items after applying offers
let items=[250,555,764,887,990];
for(let i of items)
{
        let offer=i/10;
        items[i]=items[i]-offer;
        console.log(`value after offer =${items[i]}`);
        i++;
    }

//push method in array
let food=["ALOO","lichi","khilli","lollipop"];
food.push("tomato");
console.log(food);
let del=food.pop();
console.log(del);

//practice
let companies =["bloomberg","microsoft","uber","ibm","google","netflix"];
companies.shift();//delete strating element
companies.splice(2,1,"ola");//replace uber with ola
companies.push("amazon");
console.log(companies);