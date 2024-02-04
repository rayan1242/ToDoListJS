 //1.Javascript console API
//  console.log("Hello World");
//  console.warn("warning");
//  console.error("error");
// alert("me");
 

//2.variables in js
//variables-Containers to store data values
//numbers
var number1=34;
var number2=56;
// console.log(number1+number2);

//3.data types in js
//string
var str1="this is a string";
var str2='this is also a string';

//4.Objects key- value pairs
// var marks*{
//     rayyan:99,
//     shubham:22,
//     om:55
// }
// console.log(marks);

//Booleans
var a=true;
var b=false;
// console.log(a,b);
//by default variables are undefined
var und=undefined;

// console.log(und);

var n=NULL;

//null is not equal to undefined

//primitive data types:undefined,null,number,string,symbol
//reference data types:Arrays,Objects


//Arrays

var arr=[1,2,'ray',4,5];
// console.log(arr[0]);
// console.log(arr);//prints whole array

// Operators in js

// Arithmetic operators
var x = 3;
var y = 5;
// console.log("The value of x + y is",x+y);
// console.log("The value of x - y is",x-y);
// console.log("The value of x * y is",x*y);
// console.log("The value of x / y is",x/y);

//Assignment operators
var c=x;
// c+=x;
// c-=x;
// c*=x;
// c/=x;
// console.log(c);

//comparison operator
// == >= <= << >>

// Logical Operator

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false); 

//functions in js
 function avg(x,y){
 c=(x+y)/2
 return c;
 }

 c1 = avg(4,6);
 c2= avg(14,16);

 console.log(c1,c2);

 //conditionals in java

//  if(age>2);
//  else{

//  }

//if else() 



// loops

// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(function(element)){
//     console.long(element);
// }


//while(cndt)
//do{}while(cndt);

//break and continue

//methods of arrays

// let myArr = ["Fan","car",34,null,true];
// console.log(myArr.length);
// myArr.pop();//pops last element
// myArr.push("Ray");//pushes from last
// myArr.shift();//clears the 1st index element
// myArr.unshift("abc");//adds it as 1st element
//myArr.toString()//comverts array to string

//string methods in javascript

// let myString = "Harry is a good boy"
// console.log(myString.length);

// console.log(myString.indexOf("good"));
// console.log(myString.lastindexOf("good"));
// console.log(myString.slice(3,8));
// d=myString.replace("Harry","Rohan");
// d = d.replace("good","bad");//only replaces 1st copy/occurance


// let myDate = new Date();
// console.log(myDate);
//mthds for dates there on internet
// myDate.getTime();
// myDate.getFullYear();
// myDate.getDay();
// myDate.getMinutes();
// myDate.getHours();

//DOM-Document Object Model
//DOM Methods
//Manipulation
//dom is the visible  page on website
// let elem  = document.getElementById('click');
// console.log(elem);
// document.getElementByClassName('classname');
// let elemClass = document.getElementByClassName('container');

// elemClass[0].classList.add("addnewclass");
// elem.innerHTML 
//elem.innertext  
//tn =  document.getElementByTagName('button/div');
//createdElement = document.createElement('p')'
//createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innertext = "This is a created txt";
// tn[0].replaceChild(createdElement2,createElement);
// removeChild(element);
// properties of doc // document.title // document.locatiion //document.images

// Selecting using query

// sel = document.querySelector('.container')

//document.querySelectorAll -- nodelist for all container



//EVENTS in JS

//  function clicked(){
//     console.log('The button weas clicked') ;   
// }

// window.onload = function(){
//     console.log('The document wwaas loaded');
// }
firstContainer.addEventListener('click',function())
{
    console.log("Clicked")
}
firstContainer.addEventListener('onmouseover',function())
{
    console.log("mouse over  container")
}
firstContainer.addEventListener('mouseout',function())
{
    console.log("mouse out of  container")
}

firstContainer.addEventListener('mouseup',function())
{
    console.log("mouse up when clicked on  container")
}

firstContainer.addEventListener('mousedown',function())
{
    console.log("mouse down when clicked on  container")
}

// // Arrow Functions
// function summ(a,b)
// {
//     return  a+b;

// }
// //can be written as

// summ= (a,b)=>{
//     return a+ b;
// }


// // setTimeout and setInterval
// logKaro = ()=>{
//     console.log("is printed after 2000ms");;
// }
// setTimeout(logKaro,2000);

// clr = setInterval(logKaro,2000); 

// Local Storage in JS
// localStorage.setItem('name','haery')
// localStorage;
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear(); 

//JSON --used to exchange data
// obj = {name: "harry",length:1 a:{this: "thst"}}
// jso = JSON.stringify(obj);
// console.log(jso);
//as the object is converted to sstring it is easily transportable
//json doesnt support single quote

// parsed = JSON.parse(`{name: "harry",length:1 a:{this: "thst"}}`);
// console.log(parsed);


