//sorting numbers in descending order
/*var x = 0;
var y = -1;
var z = -2;


if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(z + ", " + y + ", " + x);
    }
} */

//largest among 5 numbers

/*
var a = 1;
var b = -2;
var c = 6;
var d = 0;
var f = 9;

if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > c && d > b && d > f) {
    console.log(d);
} else {
    console.log(f);
} 
*/

//check whther the number is multiple of 3 and instead of multiple 3 it should print "fizz" and instead of 5 multiple it will print "buzz" and instead of both 3 & 5 multiple it should print "fizzbuzz"
/*
for (var i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    
    else {
        console.log(i);
    }
} 
    */

// sign of product of 3 integers

var x = -9;
var y = -7;
var z = -7;


if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}




