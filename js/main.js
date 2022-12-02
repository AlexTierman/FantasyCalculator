
//Create a simple layout for numbers to be displayed 

// Create functions for each category of scoring 

// Create functions for calculation of player scores

// Have a button that will calculate the player scores given and output them to the DOM

// IDEAS & ADDITIONS //

// The league scoring appears first requiring user input, then player scoring replaces league scoring on the DOM. Once both are input by the user a button appears that says calculate.

// Add button/pop-up thats allows users to save their league scoring data to the local storage. Also create the ability to store multiple sets of league scoring data for the user. User can differentiate new sets by naming them. 

// Add media query for mobile.

// Add buttons below the number input in order to add another form of user input for the league scoring column. Could be beneficial for mobile users.  

//12-1-2022
//after scoring rules are placed in input -> option to save to local storage
//input for name of scoring -> saved as key in local storage
//popup

//IIFE
(() => {
  const scoring = localStorage.getItem('league1');
  console.log(scoring)

  const values = scoring.split(",").map(val => Number(val))
  console.log(values)

  // grab each element from value array -> loop
  // display each using textContent
  let scoringInputs = document.querySelectorAll(".leagueInput")

  scoringInputs.forEach((el, i) => el.value = values[i])
  
})()


function num(){
  const values = document.querySelectorAll(".leagueInput")
  const scoring = Array.from(values)
  const leagueScoring = scoring.map(input => input.value)

  // console.log(leagueScoring)

  localStorage.setItem("league1", leagueScoring);
  

  const playerValues = document.querySelectorAll(".playerInput")
  const playerInputs = Array.from(playerValues)
  const playerValueArray = playerInputs.map(input => Number(input.value))
  // console.log(leagueScoring, playerValueArray)

  const fantasyPoints = leagueScoring.map((num,i)=> num * playerValueArray[i]).reduce((a,c)=> a + c, 0)
  document.querySelector("span").textContent = fantasyPoints
}

document.querySelector("#calculate").addEventListener("click", num)
