'use strict';

window.addEventListener("load", initialize);

let divJSONUitgebreid;
let slcLocatie;

function initialize() {
  //   DOM   elementen ophalen
  divJSONUitgebreid = document.querySelector('#json-uitgebreid');
  slcLocatie = document.querySelector('#locatie');

  //   Eventlisteners
  slcLocatie.addEventListener("change", toonInhoudLessen);

  //FunctieUitvoer
  vulSelect();
  toonInhoudLessen();
}

function vulSelect() {
  for (let locatie in dataLessen) {
    slcLocatie.options[slcLocatie.length] = new Option(locatie, locatie);
  }
}

function toonInhoudLessen() {
  divJSONUitgebreid.innerHTML = '';
  const keuze = slcLocatie[slcLocatie.selectedIndex].text;

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
    const toevoeging = document.createElement('div');
    let inhoudtoevoeging = "";
    
    for (let gekozenitem in dataLessen[keuze]) {
      inhoudtoevoeging += gekozenitem + " : " + dataLessen[keuze][gekozenitem] + "<br/>";
    }

    toevoeging.innerHTML = inhoudtoevoeging;
    divJSONUitgebreid.appendChild(toevoeging);
  }
}



