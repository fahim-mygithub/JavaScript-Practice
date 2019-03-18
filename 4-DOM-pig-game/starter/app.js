/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying, doubleSix;

newGame();

let lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. Get  random number
        var dice = Math.floor(Math.random()*6) + 1;

        //2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        


        //3. Update the round score IF the rolled number is NOT one
        
        //Check for last dice is six
        if(dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice !== 1){
            
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
        nextPlayer();
        }
        lastDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        //Add current score to the global score
        scores[activePlayer] = scores[activePlayer] + roundScore;

        //Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;

        // Undefined, 0 , null, or "" are Coerced to false
        var winningScore;
        
        if(input){
            winningScore = input;
        } else{
            winningScore = 20;
        }
        //Check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else {
            // Next Player
            lastDice = 0;
            nextPlayer();
        }
    }
});

function nextPlayer(){
     //Next Player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     doubleSix = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     //Set the active style class
     // document.querySelector('.player-0-panel').classList.remove('active');
     // document.querySelector('.player-1-panel').classList.add('active');
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     //Remove Dice Image
     document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
    gamePlaying = true;
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
}