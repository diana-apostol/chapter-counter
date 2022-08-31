let countEl= document.getElementById("count-el")
let resultEl= document.getElementById("result")
let count= 0
countEl.textContent= count

function chapter(){
    count= count + 1
    countEl.textContent= count 
}

function saveEl(){
    let result= count + " - "
    resultEl.textContent += result
    count= 0
    countEl.textContent= 0
    
}