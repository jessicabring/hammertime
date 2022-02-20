'use strict'

var social1 = document.querySelector(".social1");
var select1 = false;
var social2 = document.querySelector(".social2");
var select2 = false;
var social3 = document.querySelector(".social3");
var select3 = false;
var social4 = document.querySelector(".social4");
var select4 = false;
var social5 = document.querySelector(".social5");
var select5 = false;

social1.addEventListener('click', function() {
    if(!select2 && !select3 && !select4 && !select5) {
        if(!select1) {
            social1.style.backgroundColor = '#5CB3FF';
            select1 = true;
        } else {
            social1.style.backgroundColor = 'white';
            select1 = false;
        }
    }
});

social2.addEventListener('click', function() {
    if(!select1 && !select3 && !select4 && !select5) {
        if(!select2) {
            social2.style.backgroundColor = '#5CB3FF';
            select2 = true;
        } else {
            social2.style.backgroundColor = 'white';
            select2 = false;
        }
    }
});

social3.addEventListener('click', function() {
    if(!select1 && !select2 && !select4 && !select5) {
        if(!select3) {
            social3.style.backgroundColor = '#5CB3FF';
            select3 = true;
        } else {
            social3.style.backgroundColor = 'white';
            select3 = false;
        }
    }
});

social4.addEventListener('click', function() {
    if(!select1 && !select2 && !select3 && !select5) {
        if(!select4) {
            social4.style.backgroundColor = '#5CB3FF';
            select4 = true;
        } else {
            social4.style.backgroundColor = 'white';
            select4 = false;
        }
    }
});

social5.addEventListener('click', function() {
    if(!select1 && !select2 && !select3 && !select4) {
        if(!select5) {
            social5.style.backgroundColor = '#5CB3FF';
            select5 = true;
        } else {
            social5.style.backgroundColor = 'white';
            select5 = false;
        }
    }
});
