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
            ) {
            
        }

    }
}

if (houseType == "dorm") {
    var dormStyle;
    if (dormStyle == "suite-style") {
        var suiteStyle;
    }
}