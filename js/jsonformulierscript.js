"use strict";

window.addEventListener("load", Initieer);

var divJSONUitgebreid;
var slcLocatie;

function Initieer() {
  //   DOM   elementen ophalen
  divJSONUitgebreid = document.querySelector('#divJSONUitgebreid');
  slcLocatie = document.querySelector('#slcLocatie');

  //   Eventlisteners
  slcLocatie.addEventListener("change", ToonInhoudLessen);

  //FunctieUitvoer
  VulSelect();
  ToonInhoudLessen();
}

function VulSelect() {
  for (let locatie in dataLessen) {
    slcLocatie.options[slcLocatie.length] = new Option(locatie, locatie);
  }
}

function ToonInhoudLessen() {
  divJSONUitgebreid.innerHTML = '';
  let keuze = slcLocatie[slcLocatie.selectedIndex].text;

  if (Array.isArray(dataLessen[keuze])) {

    for (let i = 0; i < dataLessen[keuze].length; i++) {

      let toevoeging = document.createElement('div');
      let inhoudtoevoeging = '';

      for (let gekozenitem in dataLessen[keuze][i]) {
        inhoudtoevoeging += `${gekozenitem}: ${dataLessen[keuze][i][gekozenitem]} <br/>`;
      }

      toevoeging.setAttribute('style', 'background-color: green');

      toevoeging.innerHTML = inhoudtoevoeging;
      divJSONUitgebreid.appendChild(toevoeging);

    }
  }

  else {

    let toevoeging = document.createElement('div');
    let inhoudtoevoeging = "";
    
    for (let gekozenitem in dataLessen[keuze]) {
      inhoudtoevoeging += gekozenitem + " : " + dataLessen[keuze][gekozenitem] + "<br/>";
    }

    toevoeging.innerHTML = inhoudtoevoeging;
    divJSONUitgebreid.appendChild(toevoeging);
  }
}



