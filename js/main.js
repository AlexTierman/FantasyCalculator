
//Create a simple layout for numbers to be displayed 

// Create functions for each category of scoring 

// Create functions for calculation of player scores

// Have a button that will calculate the player scores given and output to the DOM

function num(){
  const values = document.querySelectorAll(".leagueInput")
  const scoring = Array.from(values)
  const leagueScoring = scoring.map(input => Number(input.value))

  const playerValues = document.querySelectorAll(".playerInput")
  const playerInputs = Array.from(playerValues)
  const playerValueArray = playerInputs.map(input => Number(input.value))
  console.log(leagueScoring, playerValueArray)

  const fantasyPoints = leagueScoring.map((num,i)=> num * playerValueArray[i]).reduce((a,c)=> a + c, 0)
  document.querySelector("span").textContent = fantasyPoints
}

document.querySelector("#calculate").addEventListener("click", num)

