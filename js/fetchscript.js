"use strict";

window.addEventListener("load", initialize);

function initialize() {
    //   DOM   elementen ophalen 
    const divFeedback = document.getElementById("feedback");

    //   Met   een   fetch
    fetch("http://api.icndb.com/jokes/random")
        .then(function (resp) {
            return resp.json(); 
        })
        .then(function (data) {
            console.log(data);
            divFeedback.textContent = data.value.joke;
        })
        .catch(error => console.log(error));
}