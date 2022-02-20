'use strict'

import {alderman, avery, carmichael, connor, craigeNorth, hardin, horton, joyner, kenan, mcIver, morrison, oldEast, oldWest, parker, ram1, ram2, ram3, ram4, ram5, spencer, teague, winston, resHallsList} from './library/reshalls.js';
import {crosstown, trinity, stratMLK, stratHills, royal, pinegate, southsq, chapelRidge, shadowood, kingswood, houseAptList} from './library/housesapts.js';

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
var submit = document.querySelector(".submit");

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


var hall = document.querySelector('.hallstyle');
var selecthall = false;
var suite = document.querySelector('.suitestyle');
var selectsuite = false;
var suite4 = document.querySelector('.suite4');
var selectsuite4 = false;
var suite8 = document.querySelector('.suite8');
var selectsuite8 = false;

hall.addEventListener('click', function() {
    if(!selectsuite) {
        if(!selecthall) {
            hall.style.backgroundColor = '#5CB3FF';
            selecthall = true;
        } else {
            hall.style.backgroundColor = 'white';
            selecthall = false;
        }
    }
});

suite.addEventListener('click', function() {
    if(!selecthall) {
        if(!selectsuite) {
            suite.style.backgroundColor = '#5CB3FF';
            selectsuite = true;
        } else {
            suite.style.backgroundColor = 'white';
            selectsuite = false;
        }
    }
});

suite4.addEventListener('click', function() {
    if(!selectsuite8) {
        if(!selectsuite4) {
            suite4.style.backgroundColor = '#5CB3FF';
            selectsuite4 = true;
        } else {
            suite4.style.backgroundColor = 'white';
            selectsuite4 = false;
        }
    }
});

suite8.addEventListener('click', function() {
    if(!selectsuite4) {
        if(!selectsuite8) {
            suite8.style.backgroundColor = '#5CB3FF';
            selectsuite8 = true;
        } else {
            suite8.style.backgroundColor = 'white';
            selectsuite8 = false;
        }
    }
});

submit.addEventListener('click', function() {
    if (selectdorm || selecthall) {
        var dormtype;
        if (!selectsuite) {
            dormtype = "hall";
        } else if (selectsuite4) {
            dormtype = "4 person suite";
        } else {
            dormtype = "8 person suite";
        }
    } else {

    }
});