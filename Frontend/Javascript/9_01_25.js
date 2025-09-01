// printing all even numbers from 0 to 100
/*for(let i=0; i<=100; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}*/

// finding random number game
let gamenum=25;
let usernum=prompt("guess the number");
while(usernum!=gamenum)
{
    prompt(" you enterd wrong number.guess the  correct number again");
}
console.log("congratulations you entered right number");