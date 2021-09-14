'use strict';

window.addEventListener("load", initialize);

let divJsonFeedback;

function initialize() {
  //   DOM   elementen ophalen
  divJsonFeedback = document.getElementById('feedback');

  //FunctieUitvoer
  fillData();
}

function fillData() {
  const jsonData = '{"lesinhoud":"JavaScript", "module": "WFA", "dag": "maandag", "lokaal": "K1.016", "gebouw": "BST1", "uren": 4}';
  const lessons = JSON.parse(jsonData);
  
  divJsonFeedback.textContent = `De lessen ${lessons.lesinhoud} voor module ${lessons.module} 
  gaan ${lessons.dag} door in lokaal ${lessons.lokaal} in gebouw ${lessons.gebouw} 
  en duren ${lessons.uren} uur.`; 
  
  //   OF 
 divJsonFeedback.textContent = `De lessen ${lessons['lesinhoud']} 
 voor module ${lessons['module']} gaan ${lessons['dag']} door 
 in lokaal ${lessons['lokaal']} in gebouw ${lessons['gebouw']} en  duren ${lessons['uren']} uur.`;
} 



