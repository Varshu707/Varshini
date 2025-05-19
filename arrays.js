var arr=[10,20,30,40,50]
for(var a in arr)
{
      console.log(a)

}
for(var b of arr)
{
      console.log(b)
}
var a=[100,70,45]
console.log(a)
var obj={Name:"Vicky",Dept:"CS"}
for (var key in obj){
      console.log(key)
      console.log(obj[key])
}
var arr=[1,2,3,4,5]
var arr2=[...arr ,7,8,9]
console.log(arr2)     
var marks=[90,99,95,98,100]
var [m1,m2,m3,m4,m5]=marks
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
var names=["Raj","Rani","josha","Roja"]
var [n1,n2,n3,n4]=names
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
function saybye(){
      console.log("bye")
}
function demo(name,callback)
{
      console.log("hello" +name)
      callback()

}
demo("James",saybye)
function sum(){
      console.log("Sum")
}
function display(day,callback)
{
 console.log("10" +day)
 callback()
}
display("23",sum)
const btn=document.getElementById("btn1")
btn.onclick=function(){
      window.open("https://www.instagram.com/")
      alert("welcome to instagram")
}