//let numEl = document.getElementById("num-el")
//let lengthEl = document.getElementById("len-el")
//let volumeEl = document.getElementById("vol-el")
//let massEl = document.getElementById("mass-el") 
//let numInput = 30

function unitCon(valnum) {
    
let meter = valnum * 3.281    
let feet = valnum / 3.281  
let liters = valnum / 3.785
let gallons = valnum * 3.785
let kilos = valnum * 2.205
let pounds = valnum / 2.205
  
    document.getElementById("len-el").innerHTML = valnum + " Meters = " + meter.toFixed(3) + " feet" + "  |  " + valnum + " Feet = " + feet.toFixed(3) + " Meters"

    document.getElementById("vol-el").innerHTML = valnum + " Liters = " + liters.toFixed(3) + " Gallons" + "  |  " + valnum  + " Gallons = " + gallons.toFixed(3) + " Liters"

    document.getElementById("mass-el").innerHTML = valnum + " Kilos = " + kilos.toFixed(3) + " Pounds" + " | " + valnum  + " Pounds = " + pounds.toFixed(3) + " Kilos"

}