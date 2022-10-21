/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function metersToFeet(numMeters) {
    return (parseFloat(numMeters) * 3.28084).toFixed(3);
}

function feetToMeters(numFeet) {
    return (parseFloat(numFeet) / 3.28084).toFixed(3);
}

function litersToGallons(numLiters) {
    return (parseFloat(numLiters) * 0.2641729).toFixed(3);
}

function gallonsToLiters(numGallons) {
    return (parseFloat(numGallons) / 0.2641729).toFixed(3);
}

function kilogramsToPounds(numKilograms) {
    return (parseFloat(numKilograms) * 2.2046).toFixed(3);
}

function poundsToKilograms(numPounds) {
    return (parseFloat(numPounds) / 2.2046).toFixed(3);
}

const form = document.getElementById('convert-form');
const numUnits = document.getElementById('num-units');

const fromElems = document.getElementsByClassName('from');

const toFeet = document.getElementById('to-feet');

const toMeters = document.getElementById('to-meters');

const toGallons = document.getElementById('to-gallons');

const toLiters = document.getElementById('to-liters');

const toPounds = document.getElementById('to-pounds');

const toKilograms = document.getElementById('to-kilograms');

form.addEventListener('submit', evt => {
    evt.preventDefault();
   
    for (let i = 0; i < fromElems.length; i++) {
       fromElems[i].textContent = numUnits.value;
    }
   
    toFeet.textContent = metersToFeet(numUnits.value);
    toMeters.textContent = feetToMeters(numUnits.value);
   
    toGallons.textContent = litersToGallons(numUnits.value);
    toLiters.textContent = gallonsToLiters(numUnits.value);
   
    toPounds.textContent = kilogramsToPounds(numUnits.value);
    toKilograms.textContent = poundsToKilograms(numUnits.value);
});


