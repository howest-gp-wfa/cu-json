"use strict"

var divFeedback;

window.addEventListener("load", Initieer);

function
    Initieer() {
    //   DOM   elementen ophalen 
    divFeedback = document.getElementById('divFeedback');



    //   Met   een   fetch
    fetch('http://api.icndb.com/jokes/random')
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            console.log(data);
            divFeedback.innerHTML = data.value.joke;
        }).catch(error => console.log(error));
} 