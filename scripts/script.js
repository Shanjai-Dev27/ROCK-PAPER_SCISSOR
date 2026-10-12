//Global Score object
const score = {
    wins : 0, 
    loses : 0, 
    draws : 0
};

// Computer Moves
function computerMove(){
    const moves = ["rock", "paper", "scissor"];
    return moves[Math.floor((Math.random() * moves.length))];
}

function responseAsEmoji(outcome){
    const responses = [];
    if(outcome.toLowerCase() === "win"){
        responses.push('😁');
        responses.push('😭');
    }else if(outcome.toLowerCase() === "lose"){
        responses.push('😭');
        responses.push('😁');
    }else{
        responses.push('👍');
        responses.push('👍');
    }
    return responses;
}

// Update Score
function updateScore(outcome){
    const scoreCard = document.getElementById('score-counter');
    if(outcome === "Win"){
        score.wins++;
    }else if(outcome === "Lose"){
        score.loses++;
    }else{
        score.draws++;
    }
    scoreCard.innerHTML = `Wins : ${score.wins} | Loses : ${score.loses} | Draws : ${score.draws}`;
}

// Game function
function rockPaperScissor(humanMove){
    const gameOut = document.getElementById('gameOutput');
    const finalOutCome = document.getElementById('outcome');
    const humanResponse = document.getElementById('human-response'); 
    const botResponse = document.getElementById('bot-response');
    // Invoked computer moves
    const computer = computerMove();
    let outcome;
    // Decision Tree 
    if(humanMove === "rock"){
        if(computer === "rock"){
            outcome = "Draw";
        }else if(computer === "paper"){
            outcome = "Lose";
        }else{
            outcome = "Win";
        }
    }else if(humanMove === "scissor"){
        if(computer === "rock"){
            outcome = "Lose";
        }else if(computer === "paper"){
            outcome = "Win";
        }else{
            outcome = "Draw";
        }
    }else if(humanMove === "paper"){
        if(computer === "rock"){
            outcome = "Win";
        }else if(computer === "paper"){
            outcome = "Draw";
        }else{
            outcome = "Lose";
        }
    }
    gameOut.innerHTML = `You Picked  <img src="./assets/${humanMove}.png" width="40px"/> | Computer Picked <img src="./assets/${computer}.png" width="40px"/>`;

    finalOutCome.innerHTML = `You <strong>${outcome}</strong>`;

    humanResponse.innerHTML = responseAsEmoji(outcome)[0];
    botResponse.innerHTML = responseAsEmoji(outcome)[1];
    updateScore(outcome);

}