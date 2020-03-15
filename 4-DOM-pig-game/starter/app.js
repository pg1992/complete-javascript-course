/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, previousFirstRoll, previousSecondRoll, winningScore;

init();

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    winningScore = document.getElementById('winning-score').value;
}

function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    previousFirstRoll = undefined;
    previousSecondRoll = undefined;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (!gamePlaying) return;

    // 1. Random number for each dice
    var firstDice = Math.floor(Math.random() * 6) + 1;
    var secondDice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result (first dice)
    var firstDiceDOM = document.querySelector('.dice-1');
    firstDiceDOM.style.display = 'block';
    firstDiceDOM.src = 'dice-' + firstDice + '.png';

    // (second dice)
    var secondDiceDOM = document.querySelector('.dice-2');
    secondDiceDOM.style.display = 'block';
    secondDiceDOM.src = 'dice-' + secondDice + '.png';

    // 3. Update the round score IF the rolled number was NOT 1
    if ((previousFirstRoll === 6 || previousSecondRoll === 6) && (firstDice === 6 || secondDice === 6)) {
        // LOSE EVERYTHING!!!
        scores[activePlayer] = 0;
        document.getElementById('current-' + activePlayer).textContent = '0';
        document.getElementById('score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if (firstDice !== 1 && secondDice !== 1) {
        // Add score
        roundScore += firstDice + secondDice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }

    previousFirstRoll = firstDice;
    previousSecondRoll = secondDice;
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (!gamePlaying) return;

    // 1. Add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    // 2. Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // 3. Check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        gamePlaying = false;
    } else {
        // 4. Next player
        nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);
