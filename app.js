const singleRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors')){
        
        console.log('You win')
    }else if (playerSelection === computerSelection){
        console.log('Draw')
    }else{
        console.log('You lose')
    }
    return
};

const getComputerChoice = ()=>{
    const choices = ['rock','paper','scissors']
    const random = Math.floor(Math.random() *3);
    const choice = choices[random];
    return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = 'Rock';

console.log(singleRound(playerSelection,computerSelection));