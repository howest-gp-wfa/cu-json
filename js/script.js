"use strict";

window.addEventListener("load", Initieer);

var divJSONFeedback;

function Initieer() {
  //   DOM   elementen ophalen
  divJSONFeedback = document.getElementById('divJSONFeedback');

  //FunctieUitvoer
  VulInfo();
}

function VulInfo() {
  let JSONBinnenkomend = '{"lesinhoud":"JavaScript", "module": "WFA", "dag": "maandag", "lokaal": "K1.016", "gebouw": "BST1", "uren": 4}';
  let lessen = JSON.parse(JSONBinnenkomend);
  
  divJSONFeedback.innerHTML = `De lessen ${lessen.lesinhoud} voor module ${lessen.module} 
  gaan ${lessen.dag} door in lokaal ${lessen.lokaal} in gebouw ${lessen.gebouw} 
  en duren ${ lessen.uren } uur.`; 
  
  //   OF 
 divJSONFeedback.innerHTML = `De lessen ${lessen['lesinhoud']} 
 voor module ${lessen['module']} gaan ${lessen['dag']} door 
 in lokaal ${ lessen['lokaal'] } in gebouw ${ lessen['gebouw'] } en  duren ${ lessen['uren'] } uur.`;
} 



