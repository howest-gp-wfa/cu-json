"use strict";

window.addEventListener("load", initialize);

let divJsonFeedback;

function initialize() {
  //   DOM   elementen ophalen
  divJsonFeedback = document.getElementById("feedback");

  //FunctieUitvoer
  fillData();
}

function fillData() {
  const jsonData = '{"subject": "JavaScript", "module": "WFA", "day": "maandag", "room": "K1.016", "building": "BST1", "hours": 4}';
  const lessons = JSON.parse(jsonData);
  
  divJsonFeedback.textContent = `De lessen ${lessons.subject} voor module ${lessons.module} 
  gaan ${lessons.day} door in lokaal ${lessons.room} in gebouw ${lessons.building} 
  en duren ${lessons.hours} uur.`; 
  
  // OF 
 divJsonFeedback.textContent = `De lessen ${lessons["subject"]} 
 voor module ${lessons["module"]} gaan ${lessons["day"]} door 
 in lokaal ${lessons["room"]} in gebouw ${lessons["building"]} en  duren ${lessons["hours"]} uur.`;
} 



