const header = document.getElementById("header-container");
header.style.backgroundColor = 'green';
const leftPanel = document.getElementsByClassName("emergency-tasks");
leftPanel[0].style.backgroundColor = 'pink';
const h3Urgent = document.querySelectorAll(".emergency-tasks div h3");
h3Urgent[0].style.backgroundColor = 'purple';
h3Urgent[1].style.backgroundColor = 'purple';
const rightPanel = document.getElementsByClassName("no-emergency-tasks");
rightPanel[0].style.backgroundColor = 'yellow';
const h3NoEmergency = document.querySelectorAll(".no-emergency-tasks div h3");
h3NoEmergency[0].style.backgroundColor = 'black';
h3NoEmergency[1].style.backgroundColor = 'black';
const footer = document.getElementById("footer-container");
footer.style.backgroundColor = 'blue';