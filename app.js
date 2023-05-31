
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.style.top === "70px"){
    x.style.top = "0px";
  } else {
    x.style.top = "70px";
  }
}
var theme = document.getElementById('theme')
var burger = document.getElementById('burger')
theme.onclick = function(){
  document.body.classList.toggle('lighttheme');
}

let bg = document.querySelector('#animation');

for (var i = 0; i < 400; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  bg.append(box);
}

let check = true;
function active() {
  if (check) {
    hi()
    setTimeout(hello, 600);
    check = false;
  } else {
    hello()
    setTimeout(hi, 600);
    check = true;
  }

  function hi() {
    document.body.classList.toggle('activate');
  }

  function hello() {
    document.body.classList.toggle('menuX');
  }

}