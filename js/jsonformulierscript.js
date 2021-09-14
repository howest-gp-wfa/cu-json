"use strict";

window.addEventListener("load", initialize);

let divJsonExtended;
let slcLocation;

function initialize() {
  //   DOM   elementen ophalen
  divJsonExtended = document.querySelector("#json-extended");
  slcLocation = document.querySelector("#location");

  //   Eventlisteners
  slcLocation.addEventListener("change", showLessonsContent);

  //FunctieUitvoer
  fillSelect();
  showLessonsContent();
}

function fillSelect() {
  for (let location in lessonsData) {
    slcLocation.options[slcLocation.length] = new Option(location, location);
  }
}

function showLessonsContent() {

  const selected = slcLocation[slcLocation.selectedIndex].text;
  divJsonExtended.innerHTML = "";

  if (Array.isArray(lessonsData[selected])) {

    for (let i = 0; i < lessonsData[selected].length; i++) {

      const newDiv = document.createElement("div");
      let newContent = "";

      for (let selectedItem in lessonsData[selected][i]) {
        newContent += `${selectedItem}: ${lessonsData[selected][i][selectedItem]} <br/>`;
      }

      newDiv.setAttribute("style", "background-color: green");

      newDiv.innerHTML = newContent;
      divJsonExtended.appendChild(newDiv);
    }
  }

  else {
    const newDiv = document.createElement("div");
    let newContent = "";
    
    for (let selectedItem in lessonsData[selected]) {
      newContent += selectedItem + " : " + lessonsData[selected][selectedItem] + "<br/>";
    }

    newDiv.innerHTML = newContent;
    divJsonExtended.appendChild(newDiv);
  }
}



