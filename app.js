let playerPoints = 0;
let computerPoints = 0;
const game = () =>{
    const playerSelection = window.prompt('rock, paper or scissors?');    
    const getComputerChoice = ()=>{
        const choices = ['rock','paper','scissors']
        const random = Math.floor(Math.random() *3);
        const choice = choices[random];
        return choice;
    }
    const computerSelection = getComputerChoice();
    
    const singleRound = (playerSelection, computerSelection) => {
        playerSelection = playerSelection.toLowerCase();
        if ((playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'rock' && computerSelection === 'scissors')){
            
            playerPoints +=1;
            console.log('You win!')
            console.log(`Yours points: ${playerPoints} computer points: ${computerPoints}`)
        }else if (playerSelection === computerSelection){
            console.log('Draw')
            console.log(`Yours points: ${playerPoints} computer points: ${computerPoints}`)
        }else{
            computerPoints +=1;
            console.log('You lose')
            console.log(`Yours points: ${playerPoints} computer points: ${computerPoints}`)
            
        }
        return
    };

singleRound(playerSelection,computerSelection);

    return
}
for(let i = 0; i<5; i++){
    game()
}
if(playerPoints > computerPoints){
    console.log(`You win by ${playerPoints}`)
}else if(playerPoints< computerPoints){
    console.log(`You lose by ${computerPoints} points`)
}else{
    console.log(`Draw You: ${playerPoints} Computer: ${computerPoints}`)
}