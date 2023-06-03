window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


var Skills = document.querySelector(".Skills");
var Education = document.querySelector(".Education");
var Experience = document.querySelector(".Experience");
var SkillsBtn = document.querySelector(".Skills-btn");
var EducationBtn = document.querySelector(".Education-btn");
var ExperienceBtn = document.querySelector(".Experience-btn");
var show;
Education.classList.add("unshow");
Experience.classList.add("unshow");

function ShowSkills(){
  Skills.classList.remove("unshow");
  Experience.classList.add("unshow");
  Education.classList.add("unshow"); 
  ExperienceBtn.classList.remove("Hover-Effect1");
  EducationBtn.classList.remove("Hover-Effect1"); 
  SkillsBtn.classList.add("Hover-Effect1");
}

function ShowEducation(){
  Skills.classList.add("unshow");
  Experience.classList.add("unshow");
  Education.classList.remove("unshow"); 
  SkillsBtn.classList.remove("Hover-Effect1");
  ExperienceBtn.classList.remove("Hover-Effect1");
  EducationBtn.classList.add("Hover-Effect1"); 
}

function ShowExperience(){
  Education.classList.add("unshow");
  Skills.classList.add("unshow");
  Experience.classList.remove("unshow");
  SkillsBtn.classList.remove("Hover-Effect1");
  EducationBtn.classList.remove("Hover-Effect1");
  ExperienceBtn.classList.add("Hover-Effect1");
}

function Yes(){
  alert('Add me mah bro')
}
function No(){
  alert('bai n bai')
}
