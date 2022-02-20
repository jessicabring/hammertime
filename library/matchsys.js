'use strict'
import {resHallsList} from 'reshalls.js';
import {houseAptList} from 'houseapts.js';

var housingType;
var socialScore;

if (housingType == "apartment" || "house") {
    var bedrooms;
    var bathrooms;
    var distance;
    var price;
    const matches = [];
    for (let i = 0; i < resHallsList.length; i++) {
        if (
            houseAptList[i].type == housingType &&
            houseAptList[i].price <= price &&
            houseAptList[i].social - socialScore <= 2 &&
            houseAptList[i].distance <= distance &&
            houseAptList[i].bath - bathrooms <= 1 &&
            houseAptList[i].bed - bedrooms <= 1) {
            matches.push(houseAptList[i]);
        }

    }
}

if (houseType == "dorm") {
    var dormStyle;
    var laundry;
    if (laundry == "Not important") {
        for (let i = 0; i < resHallsList.length; i++) {
            if (
                resHallsList[i].type == housingType &&
                resHallsList[i].social - socialScore <= 2) {
                matches.push(resHallsList[i]);
            }
        }
    }
    if (dormStyle == "suite-style") {
        var suiteStyle;
        for (let i = 0; i < resHallsList.length; i++) {
            if (
                resHallsList[i].type == housingType &&
                resHallsList[i].social - socialScore <= 2) {
                matches.push(resHallsList[i]);
            }
        }
    }
}

