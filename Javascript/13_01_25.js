//STRINGS
//string and template literals
let str="sameera";
console.log(str);
console.log("sameera\nfarhana");//escape characters
console.log("sameera\tfarhana");
let newstr=str.toUpperCase();
console.log(newstr);
let newstr2=newstr.toLowerCase();
console.log(newstr2);
let str3="  sam  meera";
console.log(str3.trim());//remove white spaces
console.log(str.slice(1,3));//to print vales from given index
console.log(str.concat(str3));//concat
console.log(str.replace("s","m"));//replace string
console.log(str.charAt(0));//to find character at given index

//practice tests
//1.
let name=prompt("enter name");
let username="@"+ name + name.length;
console.log(username);