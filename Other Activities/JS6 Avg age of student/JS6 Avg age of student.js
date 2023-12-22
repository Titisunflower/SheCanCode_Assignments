let sum = 0;
let average = 0;
let age = 0;
let number = prompt("enter number of students");

for(let i = 0; i< number; i++)
{
  let age =Number(prompt("enter the students age"));
  sum += age;
   average = sum / i;
 
}


console.log("The avg age=" + average);