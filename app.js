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
