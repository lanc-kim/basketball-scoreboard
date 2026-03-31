let homeScore = 0
let homeP = document.getElementById("homescore")
let awayScore = 0
let awayP = document.getElementById("awayscore")
let period = 1
let elPeriod = document.getElementById("period")

function hplus1(){
  homeScore += 1
  homeP.textContent = homeScore
}

function hplus2(){
  homeScore += 2
  homeP.textContent = homeScore
}

function hplus3(){
  homeScore += 3
  homeP.textContent = homeScore
}

function aplus1(){
  awayScore += 1
  awayP.textContent = awayScore
}

function aplus2(){
  awayScore += 2
  awayP.textContent = awayScore
}

function aplus3(){
  awayScore += 3
  awayP.textContent = awayScore
}

function newGame(){
  homeScore = 0
  awayScore = 0
  period = 1
  homeP.textContent = homeScore
  awayP.textContent = awayScore
  elPeriod.textContent = period
}

function pplus1(){
  if (period < 4){
  period += 1
  elPeriod.textContent = period
  }
  else{
    period = 1
    elPeriod.textContent = period
  }
}

function pminus1(){
  if (1 < period <= 4){
  period -= 1
  elPeriod.textContent = period
  }
  else{
    period = 1
    elPeriod.textContent = period
  }
}