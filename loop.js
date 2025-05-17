var a=40;
if(a%2==0)
{
      console.log("even")
}
else{
      console.log("odd")
}
n=1;
while(n<=10)
{
      if(n%2==0)
      {
            console.log(`${n} is even`)
      }
      else{
            console.log(`${n} is odd`)
      }
      n++;
}
n=1;
do{
      if(n%2==0)
      {
            console.log(`${n}is even`)

      }
      else{
            console.log(`${n} is odd`)

      }
      n++;

}
while(n<=10)
n=1;
switch(n){
      case 1:
            console.log("Sunday")
            break;
      case 2:
            console.log("Monday") 
            break;
      case 3:
             console.log("Tuseday")
             break;   
      case 4:
             console.log("wednesday")
             break; 
      case 5:
            console.log("Thursday")
            break;
      case 6:
            console.log("Friday")
            break;
      case 7:
            console.log("Saturday")
             break;    
      default:
            console.log("Enter the invaild number")
}
var sum = () =>{
      console.log(10+20)
}
sum()
const sub =() =>{
      console.log(30-10)
}
sub()
i=10;
var result= (i%2==0)?"even":"odd"
console.log(result)
sum=0
for(i=1;i<=10;i++)
{
      if(i%2==0)
      {
            console.log(`${i} is even`)
            sum=sum+i;
      }
}
console.log(`the sum is ${sum}`)







