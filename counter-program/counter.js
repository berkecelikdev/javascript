const decreaseButton = document.getElementById("decrease-button")
const resetButton = document.getElementById("reset-button")
const increaseButton = document.getElementById("increase-button")
const countLabel = document.getElementById("countlabel")
let count = 0

increaseButton.onclick = function(){
    count++
    countLabel.textContent = count
}

decreaseButton.onclick = function(){
    count--
    countLabel.textContent = count
}

resetButton.onclick = function(){
    count = 0
    countLabel.textContent = count
}
