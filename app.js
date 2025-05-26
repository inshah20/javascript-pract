// let userInput = prompt("enter your name");
// let age = prompt("enter your complete DOB");


// let today = new Date();
// let todayMilliSec = today.getTime();

// let birthday = new Date(age);
// let birthYearMilliSec = birthday.getTime();
// let difference = todayMilliSec - birthYearMilliSec


// document.write("<h1> " + "Age Calculator" + "<h1 />")

// document.write("my name is: " + userInput + "<br />")
// document.write("Millisecond: " + Math.round((difference/( 1000 )))+ "<br />") 
// document.write("seconds: " + Math.round((difference / (1000 * 60 )))+ "<br />") 
// document.write("minutes: " +Math.round(( difference / (1000 * 60 * 60))) + "<br />") 
// document.write("hours: " + Math.round((difference / (1000 * 60 * 60 *24))) + "<br />") 
// document.write("weeks: " + Math.round((difference / (1000 * 60 * 60  * 7 )))+ "<br />") 
// document.write("year: " +Math.round(( difference / (1000 * 60 * 60 * 24 * 365))))


// function sum(userNum1 , userNum2, userNum3){
//     let number = userNum1 + userNum2 * userNum3
//     return number
// }


// function today(){
//     let today = new Date();
//     let date = today.getDate();
//      let minutes = today.getMinutes();
//      let seconds = today.getSeconds();
//  return  [date, minutes, seconds ]
// }
// document.write(today()+ "<br />");

// let firstName = prompt("Enter you first Name");
// let lastName = prompt("Enter you last Name");

// function greet(){

//     let fullName = firstName + lastName;
//     return fullName
// }

// alert( "hello " + greet());

// let userInput = prompt("enter a word to check whether its palindrome or not").toLowerCase()
// function palindromChecker(word) {

//     let result = word.split("").reverse().join("");

//     if (result == word) {
//         document.write(word + " is a palindrome word")
//     }

//     else {
//         document.write(word + " is not a palindrome word")
//     }
// } 

// palindromChecker(userInput);

// let sentence = "thisismeinsha"
// function line(row){
//     let splilledWord = line.split(" ,")
//     console.log(sentence)
// }

// switch (mon) {
//     case "sat" :
//         alert ("fun")
//      case "sun ":
//         alert ("sun")
//     case "mon :
//         alert ("work")
//             break;
//         case Friday :
//         alert ("Mubarak")
// }    


// let traficLight = prompt("Enter light").toLowerCase()

// switch (traficLight) {
//     case "red":
//         alert("stop");
//         break;

//     case "yellow":
//         alert("ready");
//         break;

//     case "green":
//         alert("go");
//         break;

//     default:
//         alert("enter valid color")
// }



// for even numbers               this is the first example
// let i = 25;
// while(i > 1){
//     i = i +1
//     document.write(i + "<br />");
//     i--;
// }


// for even numbers                 this the second one
// let i = 1;
// while(i <= 25){
//     if(i % 2 == 0){
//         document.write(i + "<br />");
//     }
//     i++;
// }


// for odd number 
// let i = 1;
// while(i <= 25){
//     if(i % 2 !== 0){
//         document.write(i + "<br />");
//     }
//     i++;
// }


// let passward = "inshah123";
// let userInput = prompt("enter your passward");

// while(true){
// if(userInput == passward){
//     alert("Welcome to home");
//     break;
// }
//  else{
//     userInput = prompt("try again");
//  }
// }


// let colors = ["red", "blue", "green", " yellow", "orange"];

// let i = 0
// while(i<colors.length){
//     document.write(i +"  "+ colors[i]+ "<br />")
//     i++;
// }

// let battery = 0;
// let chargeIncrement = 10;

// while(battery <=100){
//     if(battery == 100){
//         document.write("Your Mobile is fully charged");
//         break;
//     }
//     battery = battery + chargeIncrement;
// }


// let passward = "secure123";
// let userpassward;
// let count = 0;

// while(true){
//     if(passward == userpassward){
//         document.write("Navigate to home page");
//         break;
//     }
// if(count == 5){
//     document.write("you're blocked from this platform");
//     break;
// }
// count++;
// userpassward = prompt("enter your passward");
// }


//Qno : 1

// let a = +prompt("enter number");
// let b = +prompt("enter number");

// function power(a,b){
//     let ans= Math.pow(a,b);
//     return ans;
// }

// document.write(a + "<sup>" + b + "</sup>" + " is a " + power(a,b));

//Qno:2

// let userYear = prompt("Enter light").toLowerCase()

// switch (userYear) {
//     case "2012":
//         alert("it's a leap year");
//         break;

//     case "2016":
//         alert("it's a leap year");
//         break;

//     case "2020":
//         alert("it's a leap year");
//         break;

//     default:
//         alert("it's not a leap year")
// }

// Qno : 3




// function info(){
//     prompt("what,syour name");
// }

// function difference(){
//     prompt("what's your qualification")
// }


// function purchasing(){
//     alert("le le le le")

// let inputField = document.getElementById("input1")

// inputField.addEventListener("focus", hello)

// function hello (){
//     console.log("clicking")
// }

// let button = document.getElementById("input1")

// button. addEventListener("click" , greet)

// function greet(){
//     alert("hello")
//     // button.style.backgroundColor = "white ";
//     button.className = "btn container"

// }

// let button = document.getElementsByClassName("input2")

// button.addEventListner("click" , greet)

// function greet(){
//     alert("hy")
//     button.className = ("btn")
// }

// let obj = {
//     class: "web",
//     day: "monday"
// }

// console.log(typeof obj)

// let arr =["a", "b", "c"];
// console.log(typeof arr)





// let btn = document.getElementById("submit");
// console.log(btn);

// btn.addEventListener("click", function(){
//     console.log("clicking")
//     let inputField = document.getElementById("input1")

// console.log(inputField.value. length);
// if(inputField.value.length == 0){
//     inputField.className = "border"
// }

// })


// document.addEventListener("keydown", function(event){
//     console.log("key is pressing")
//     console.log(event.key +  event.keyCode)
// })              



// let fullText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate suscipit eligendi nihil aut obcaecati nam iste
// dolor sed iure qui quibusdam esse dolores iusto delectus voluptas eos provident non sunt, eaque minus incidunt enim
// explicabo! Odio accusantium inventore laborum perspiciatis tempore. Illo, maxime atque pariatur ad voluptas suscipit
// deserunt porro quos quidem incidunt quia totam ipsam repellat, adipisci eveniet numquam ratione fugiat ullam sed at
// recusandae repudiandae reiciendis. Molestiae, modi?`

// let shortText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores."

// let btn = document.getElementById("btn")

// let para = document.getElementById("para");

// btn.addEventListener("click" , function(){

//     if(btn.innerHTML == "see more"){
//         para.innerHTML = fullText;
//         btn.innerHTML = "see less";

//     }


//     else{
//         para.innerHTML = shortText;
//         btn.innerHTML = "see more";
//     }
// })



// let paragraph = document.getElementsByTagName("p");
// let btn = document.getElementById("btn");


// btn.addEventListener("click", function(){
//     for(let i = 0; i<paragraph.length; i++){
//         paragraph[2] .className = "bg-color"
//         paragraph[2].innerHTML = "inshah is the best"
//     }
// })


// let para = document.getElementById("p")
// let btn = document.getElementById("btn")

// btn.addEventListener("click" , function(){
//     para.className = "hidden"
// })




// const student1 = {
//   firstName : "inshah",
//   lastName : "jamal",
//   class : "web And app development",
//   rollNo : 312767,
//   hobbies : [
//     "coding", "sleeping",  "eating"
//   ],
//   address :{
//    street:  "801 pib colony karachi" ,
//    zipCode : "74800"
//   }
// }

// console.log(student1.hobbies[2]);

// delete student1.class 
// console.log(student1)                                                                 

// console.table(student1)


// let cities = ["Karachi", "lahore", "peshawar", "multan", "islamabad", "quetta"]

// for(let city of cities){
//   console.log(cities)
// }

// for(let index in cities){
//   console.log(cities[3])
// }

// let nam = "Inshah"

// for(let character of nam){
//   console.log(nam);
// }


// for(let character in nam){
//   console.log(character);
// }

// const person = {
//     firstName: "inshah",
//     lastName: "jamal",
//     class: "web",
//     isEnrolled: true,
//     eat: function(){
// console.log(`${this.firstName} ${this.lastName} is eating`)
//     },
// };
// console.log(Object.entries(person));
// var valuesOfObj = Object(person)
// for off
// for(let value of valuesOfObj){
//     console.log(value[1]);
// }

// for in
// for(let key in person){
//     console.log(person[key])
// }  


// convert object  into string

// const obj = {Name: "inshah", number: 21}
// const str = JSON.stringify(obj)
// console.log(str);


// convert string into object

// const str = '{"Name" : "sahar", "age": 21}'
// const obj = JSON.parse(str)
// console.log(obj.Name);

// what is local storage?

// Local Storage ek web browser ka feature hai jo websites ko user ke browser mein data permanently store karne
//  deta hai.Ye Web Storage API ka hissa hai aur key - value storage system provide karta hai.

// saving simple strings 

// localStorage . setItem ('userName' , 'age')
// localStorage . setItem  ('inshah' , 21)

// saving array and objects

const user = [
    firstName = "rahul",
    age = 28,
]

