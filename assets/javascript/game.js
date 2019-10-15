var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
               "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

var chooseRandomLetter = function(array) {
      return array[Math.floor(Math.random() * array.length)];
  }

var computerChoice = chooseRandomLetter(letters);
console.log(computerChoice);

var wins=0;
var guesses=9;
var losses=0;



    document.onkeypress = function(event) {
        var userGuess = event.key;
        

        //console.log(userGuess);

        if(userGuess === computerChoice){
            wins+=1;
            console.log(wins);
            guesses = 9;
            computerChoice = chooseRandomLetter(letters);
            console.log(computerChoice );
        }else{
            guesses-=1;
            console.log(guesses);
        }

        if(guesses === 0){
            losses+=1;
            guesses = 9;
            console.log(losses);
            computerChoice = chooseRandomLetter(letters);
            console.log(computerChoice );
            userGuess = '';
        }

        

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
        document.getElementById('selecting').innerHTML = "You selected: " + userGuess;
        
        
    }  