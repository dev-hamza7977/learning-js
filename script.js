// BASIC JS

// let x;
// x = 75;
// alert(x);
// console.log(x);

// let message = "Hello To Dark World !";
// alert(message);
// console.log(message);

// var newdata = "Are You Ready For This Adventure !"
// alert(newdata);
// console.log(newdata);

// let messagebox;
// messagebox = "This Is Your First Step";
// messagebox = "This Is Your Second Step Of The First";
// messagebox = "This Is Your Third Step Of The First";
// alert(messagebox);
// console.log(messagebox);

// let admin;
// let name;
// name = "Danny";
// admin = name;
// console.log(admin);

// const birthday = "08.01.0000";
// console.log(birthday);

// Datatypes

// 1. Number datatype
// let a = 1234;
// let b = 12.34;
// alert(typeof (b));

// 2. BigInt Datatype
// let bn = 1234567890n
// console.log(typeof (bn))

// 3. String datatype
// let wish = "good"
// let goodwishes = "night"
// console.log(typeof (night))
// let allwishes = `very ${wish}`;
// console.log(allwishes);
// console.log(`all wishes is ${1 + 2}`)

// 4. Boolean datatype
// let isGreater = 4 > 2;
// alert(isGreater);
// console.log(isGreater);
// alert(typeof (isGreater));
// console.log(typeof (isGreater));

// 5. Null datatype
// let age = null;
// console.log(age);

// 6. Unefine datatype
// let x;
// console.log(x);

// 7. Symbol datatype
// let value = Symbol("maruti");
// console.log(value);

// 8. Object datatype
// let car = { colour: "red", company: "maruti", type: "diesel" };
// console.log(car);


// BASIC OPERATORS

// 1.Arethmatic Operators

// addition
// let a = 20;
// let b = 30;
// let c = a + b;
// alert(c);

// subtraction
// let a1 = 500;
// let a2 = 100;
// let a3 = a1 - a2;
// alert(a3);

// multiplication
// let d = 500;
// let e = 100;
// let f = d * e;
// alert(f);

// Exponention
// let f = 5;
// let h = 2;
// let z = f ** h;
// alert(z);

// Division (quotient)
// let g = 5;
// let i = 2;
// let j = g / i;
// alert(j);

// Moduldus (remanider)
// let m = 5;
// let n = 2;
// let o = m % n;
// alert(o);


// 2. ASIGNMENT OPERATORS

// =
// var x = 2;
// var y = 5;
// var z = x = y;
// console.log(z);

// +=
// a1 = 30;
// a1 += 20;
// console.log(a1);

// let n = 10;
// n += 10; //20
// n *= 10; //200
// alert(n); //200

// -=
// a1 = 1;
// a1 = -a1;
// console.log(a1);

// /=
// a1 = 10;
// a1 /= 5;
// console.log(a1);

// %=
// a1 = 10;
// a1 %= 5;
// console.log(a1);

// **=
// a1 = 10;
// a1 **= 2;
// console.log(a1);

// 3. STRING OPERTOR
// let a = 2
// let b = 50
// let c = "50"
// console.log(a + b + c);

// 4. INCREMENT & DECREMENT OPERATORS
// let f;
// // pre increment
// f = 20;
// console.log(++f);
// console.log(f);

// // post increment
// let g;
// g = 20;
// console.log(g++);
// console.log(g);

// let h;
// // pre decrement
// h = 20;
// console.log(--h);
// console.log(h);

// // post decrement
// let i;
// i = 20;
// console.log(i--);
// console.log(i);

// 5. LOGICAL OPERATORS

// && And operator all condition are satisfed
// const a = true, b = false;
// const c = 6;
// console.log(a && a);
// console.log(a && b);
// console.log((c > 2) && (c < 2));

// || OR operator atleast one condition must be satisfied
// const a = true, b = false;
// const c = 6;
// console.log(a || a);
// console.log(a || b);
// console.log((c > 2) || (c < 2));

// ! NOT Operator oppsite of conditions
// const a = true, b = false;
// console.log(!a);
// console.log(!b);

// 6. COMPARISION OPERATORS
// x = 10;
// x == "10";
// // x === "10";
// console.log(typeof (x));


// 7. CONDITON OPERATORS
// let company = prompt("Which Company created Javascript ?");
// if (company == 'netscape') {
//     alert('Yes You Are Right');
// } else {
//     alert("you are wrong");
// }

// let Student = prompt("Please Enter Your Name :")
// if (Student == 'Hamza') {
//     alert("Thank You!")
// } else {
//     alert("Sorry You Are Denied..")
// }

// let employee = prompt("Enter Id:")
// if (employee == 1234) {
//     alert("Login sucessful.")
// } else {
//     alert("Login Failed !")
// }

// 8. Array

// const fruits = ['Apple', 'Banana', 'Orange', 'Peer'];
// console.log(fruits);
// const vegetables = ['Spinach', 'Cabbage', 'Tamato']

// joinmethod
// let joinmethod = fruits.join();
// console.log("This is the join method=", joinmethod);
// console.log(typeof (fruits));

// popmethod
// let popmethod = fruits.pop();
// console.log("This is pop method: ", fruits)

// pushmethod
// let pushmethod = fruits.push('chickoo');
// console.log("This is push method", fruits);

// shiftmethod
// let shiftmethod = fruits.shift();
// console.log("This Is shift method", fruits);

// unshiftmethod
// let unshiftmethod = fruits.unshift("Guava");
// console.log("This is unshiftmethod: ", fruits);

// splicemethod
// let splicemethod = fruits.splice(1, 4, "Watermelon", "Kiwi", "Rawapple");
// console.log("Thsi is splice method: ", fruits);

// concat
// let concatmethod = fruits.concat(vegetables);
// console.log("This Is Concat Method", concatmethod);

// slice
// let slicemethod = fruits.slice(1, 4);
// console.log("This Is Slice Method", slicemethod);

// reverse
// let reverse = fruits.reverse();
// console.log(reverse);

// sort
// let sort = fruits.sort();
// console.log(sort);
// ====================================================================================================================================
// Functions

// Simple Function
// function showMessage() {
//     alert("hello everyone");
// }
// showMessage();
// showMessage();

// function printmessage() {
//     console.log("This is function message");
// }
// printmessage();

// Local Variable
// function goodMessage() {
//     let wish = "Good Night !";
//     alert(wish);
// }
// goodMessage();
// alert(wish);

// Outer Variable
// let username = "Hamza"
// function admin() {
//     let adminname = "This is the admin name : " + username;
//     alert(adminname);
// }
// admin();
// alert(username);

// Outer variable (can be change with in the function)
// let clientname = "Meghani"

// function credentials() {
//     clientname = "Hamza";
//     let showcredentials = "Client Name : " + clientname;
//     alert(showcredentials);
// }
// alert(clientname);
// credentials();
// alert(clientname);

// let username = "Hamza"
// function user() {
//     username = "Meghani"
//     let admin = "This is username : " + username;
//     alert(admin);
// }
// alert(username);
// user();
// alert(username);

// If the local variable is available with in the function then the outer variable is not used by it.

// let greetingMessage = "Welcome";

// function wishing() {
//     let greetingMessage = "Darkworld";
//     let greetings = "Welcome to " + greetingMessage;
//     alert(greetings);
// }

// wishing();


// let studentName = "Meghani"

// function studentid() {
//     let studentName = "Hamza"
//     let credential = "Student Name: " + studentName;
//     alert(credential);
// }

// studentid();

// Parameters/Arguments

// function testingParameter(from, message) {
//     alert(from + " " + message);
// }

// testingParameter("Hamza", "Good Night");
// testingParameter("Meghani", "is frontend developer")

// function practisngParameter(firstname, name, post) {
//     console.log(firstname + " " + name + " : " + post);
// }

// practisngParameter("MEGHANI", "HAMZA", "FRONTEND DEVELOPER");
// practisngParameter("MEGHANI", "MEHBOOB", "ALL CODER");
// practisngParameter("MEGHANI", "HAMZA", "FULL STACK DEVELOPER");
// practisngParameter("MEGHANI", "MEHBOOB", "FRONTEND DEVELOPER");

// returning a value
// function sum(a, b) {
//     return (a + b);
// }

// let result = sum(1, 2);
// alert(result);

// function multiply(b, c) {
//     return (b * c);
// }
// let result = multiply(1, 2);
// alert(result);

// if else in function

// function checkpassword(password) {
//     if (checkpassword == "meghani9869") {
//         return true;
//     } else {
//         return confirm("Sorry Its Wrong")
//     }
// }

// let password = prompt("Enter Your Password")

// if (checkpassword(password)) {
//     alert("Access Granted")
// } else {
//     alert("Access Denied")
// }

// function checkAge(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return confirm("Do you have a permission")
//     }
// }

// let age = prompt("Enter Your Age", 18)

// function showMovie(age) {
//     if (!checkAge(age)) {
//         return;
//     }

//     alert("ADAS")
// }

// if (showMovie(age)) {
//     alert("Acess Granted");
// } else {
//     alert("Acess Denied")
// }

// switchcase

// var college = function (name, post) {
//     switch (post) {
//         case "principal":
//             return `${name} have full access`
//             break;
//         case "vice principal":
//             return `${name} have access to add and delete departments`
//             break;
//         case "supervisor":
//             return `${name} have access to add and delete and edit in the course`
//             break;
//         case "HOD":
//             return `${name} have access to change in subjects`
//             break;
//         case "professor":
//             return `${name} have access to teachand change in chapters`
//             break;
//         case "student":
//             return `${name} have acess to learn the course`
//             break;
//         default:
//             return `You have readonly access`
//     }
// }
// alert(college("Saima", "visitor"))


// var company = function (name, post) {
//     switch (post) {
//         case "CEO":
//             return `${name} have full access`
//             break;
//         case "DIRECTOR":
//             return `${name} have access to take decisons`
//             break;
//         case "MANAGER":
//             return `${name} have acess to manage company`
//             break;
//         default:
//             return `You have only working access`
//             break;
//     }
// }
// alert(company("Masroor", "Employee"))


















