'use strict'
import {resHallsList} from 'reshalls.js';
import {houseAptList} from 'houseapts.js';
import {socialscore, laundryscore, dormtype, bed, bath, distance, price, type} from 'quiz.js';

var housingType;
var socialScore = socialscore;

if (housingType == "apartment" || "house") {
    housingType = type;
    var bedrooms = bed;
    var bathrooms = bath;
    var dist = distance;
    var cost = price;
    const matches = [];
    for (let i = 0; i < houseAptList.length; i++) {
        if (
            houseAptList[i].type == housingType &&
            houseAptList[i].price <= cost &&
            houseAptList[i].social - socialScore <= 2 &&
            houseAptList[i].distance <= dist &&
            houseAptList[i].bath - bathrooms <= 1 &&
            houseAptList[i].bed - bedrooms <= 1) {
            matches.push(houseAptList[i]);
        }

    }
}

if (houseType == "dorm") {
    var dormStyle = dormtype;
    var laundry = laundryscore;
    // do we want to add a north/south campus category to residence halls?
    // I'm also working on figuring out how many ppl each dorm accommodates per suite
    if (dormStyle == "4 person suite" || "8 person suite") {
        if (laundry == "Not important") {
            for (let i = 0; i < resHallsList.length; i++) {
                if (
                    resHallsList[i].style == dormStyle &&
                    resHallsList[i].social - socialScore <= 2) {
                    matches.push(resHallsList[i]);
                }
            }
        }
        else {
            for (let i = 0; i < resHallsList.length; i++) {
                if (
                    resHallsList[i].style == dormStyle &&
                    resHallsList[i].social - socialScore <= 2 &&
                    resHallsList[i].laundry) {
                    matches.push(resHallsList[i]);
                }
            }
        }
    }
}

