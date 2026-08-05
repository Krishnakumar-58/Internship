const prompt=require('prompt-sync')();
let num = parseInt(prompt("Enter a table number: "));
function Table(n)
{
    for (let i = 1; i <= 10; i++) {
        console.log(n, "x", i, "=", n * i);
    }
}
Table(num);