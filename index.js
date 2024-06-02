let firstScore = 0
let secondScore = 0

let homeScore = document.getElementById("scoreHome")
let guestScore = document.getElementById("scoreGuest")


function incrementHomeOne() {
    firstScore = firstScore + 1
    homeScore.textContent = firstScore
}

function incrementHomeTwo() {
    firstScore = firstScore + 2
    homeScore.textContent = firstScore
}

function incrementHomeThree() {
    firstScore = firstScore + 3
    homeScore.textContent = firstScore
}

function incrementGuestOne() {
    secondScore = secondScore + 1
    guestScore.textContent = secondScore
}

function incrementGuestTwo() {
    secondScore = secondScore + 2
    guestScore.textContent = secondScore
}

function incrementGuestThree() {
    secondScore = secondScore + 3
    guestScore.textContent = secondScore
}