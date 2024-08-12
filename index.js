/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

const inputEl=document.getElementById("input-el")
const convertBtn=document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.205

const feetToMeter =  0.305
const gallonToLiter =  3.785
const poundToKilo =  0.454

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${Number(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${Number(baseValue * feetToMeter).toFixed(3)} meter`
    
    volumeEl.textContent = `${baseValue} liter = ${Number(baseValue * literToGallon).toFixed(3)} gallon |
     ${baseValue} gallon = ${Number(baseValue * gallonToLiter).toFixed(3)} liter`
    
    massEl.textContent = `${baseValue} kilo = ${Number(baseValue * kiloToPound).toFixed(3)} pounds |  ${baseValue} pounds = ${Number(baseValue * poundToKilo).toFixed(3)} kilo`
      
})
