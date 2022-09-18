// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 1234;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Welcome To I.T. world";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.image);

// GET ELEMENT BY ID

// console.log(document.getElementById("header-title");
// var headerTitle = document.getElementById("header-title")
// headerTitle.textContent = "welcome"
// headerTitle.innerText = "welcome again"
// console.log(headerTitle)
// headerTitle.innerHTML = "<h2><b><i>Welcome To I.T. World</h2></b><i>"
// headerTitle.style.border = "10px solid cyan";
// headerTitle.style.padding = "50px";
// headerTitle.style.borderRadius = "200px"
// headerTitle.style.textAlign = "center"
// headerTitle.style.color = "red"
// headerTitle.style.backgroundColor = "yellow"
// document.getElementById("header-title").style.fontFamily = "Algerian, Times, serif"

// GET ELEMENT BY CLASS NAME

// var items = document.getElementsByClassName("list-group-item")
// console.log(items);
// items[0].textContent = "Hello";
// items[1].innerText = "welcome";
// items[2].innerHTML = "<b>To</b>";
// items[3].style.color = "blue";
// document.getElementsByClassName("list-group-item")[0].innerText = "Hello"

// GET ELEMENT BY TAGNAME

// var li = document.getElementsByTagName("li");
// console.log(li);
// li[0].textContent = "welcome to js";
// li[1].innerText = "this is practise";
// li[2].innerHTML = "<b>of javascript</b>";
// li[3].style.backgroundColor = "yellow";
// document.getElementsByTagName("li")[0].innerHTML = "Hello";

// QUERY SELECTOR

// var header = document.querySelector("#main-header")
// header.style.borderBottom = "solid 20px cyan"

// var input = document.querySelector("input")
// input.value = "Test"

// var submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// var items = document.querySelector(".list-group-item");
// items.style.backgroundColor = "#A9A9A9"

// var items = document.querySelector(".list-group-item:last-child");
// items.style.backgroundColor = "white"

// var items = document.querySelector(".list-group-item:nth-child(3)");
// items.style.backgroundColor = "#A9A9A9"


// var items = document.querySelector(".list-group-item:nth-child(2)");
// items.style.backgroundColor = "#white"

// QUERY SELECTOR ALL

// var titles = document.querySelectorAll(".title")
// console.log(titles)

// titles[0].innerHTML = "Welcome To <b>WEBWONDERS<b> !"