//LOOPS

//1. odd,even loop
/*
for (var x = 0; x <= 100; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    
    else {
        console.log(x + " is odd");
    }
}
    */ 
//2.pattern
/*var x, y, chr;

for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        console.log("*");
    }
} */

// 3. printing first  n natural numbers
 /*var a=prompt("enter n:");
 for(var i=1;i<a;i++)
 {
    console.log(i);
 }*/

//sum of 3&5 multiples
/* 
var sum = 0;

for (var x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
        sum += x;
    }
}

console.log(sum); 
*/

// checking whther given number is armstrong number or not
/*
var number = 153;  
var temp = number;
var sum = 0;
var numDigits = 0;
var temp2 = number;

while (temp2 > 0) {
    temp2 = (temp2 - (temp2 % 10)) / 10;
    numDigits++;
}
temp = number;
while (temp > 0) {
    var digit = temp % 10;
    var power = 1;
    for (var i = 0; i < numDigits; i++) {
        power *= digit;
    }

    sum += power;
    temp = (temp - (temp % 10)) / 10;
}

if (sum === number) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}
    */
  //checking whether given number is paliandrome or not
  var number=prompt("enter n:");
  var originalNumber = number;
var reversedNumber = 0;
var digit;
while (number > 0) {
    digit = number % 10;          
    reversedNumber = reversedNumber * 10 + digit;  
    number = (number - digit) / 10;
}

if (originalNumber == reversedNumber) {
    console.log(originalNumber + " is a palindrome.");
} else {
    console.log(originalNumber + " is not a palindrome.");
} 


 

