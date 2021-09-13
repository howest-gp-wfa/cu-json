'use strict';

var divOldFeedback;

window.addEventListener("load", initialize);

function initialize() {
    //   DOM   elementen ophalen
    divOldFeedback = document.getElementById('feedback');

    //FunctieUitvoer
    haalInfo();
}

function haalInfo() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let joke = JSON.parse(this.responseText);
            ToonJoke(joke);
        }
    };

    xmlhttp.open("GET", "http://api.icndb.com/jokes/random", true);
    xmlhttp.send();
}

function ToonJoke(data) {
    divOldFeedback.innerHTML = data.value.joke;
} 