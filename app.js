let playerPoints = 0;
let computerPoints = 0;
const buttonSelection = document.querySelectorAll('[data-selection]')
const result = document.querySelector('.result');
const userScore = document.querySelector('.user');
const pcScore = document.querySelector('.pc');

function toggleButton() {
    document.getElementById("button").className = 'show'; 
}


    buttonSelection.forEach(buttonSelection => {
        buttonSelection.addEventListener('click', e =>{
            if(playerPoints < 5 && computerPoints < 5){
                const selectionName = buttonSelection.dataset.selection
                makeSelection(selectionName);}

        })
    })

    function makeSelection(selection){
        const playerSelection = selection
        const computerSelection = getComputerChoice()
        singleRound(playerSelection,computerSelection)
        // console.log(playerSelection, computerSelection)

    }
    
    const getComputerChoice = ()=>{
        const choices = ['rock','paper','scissors']
        const random = Math.floor(Math.random() *3);
        const choice = choices[random];
        return choice;
        
        
    }

    function toggleButton() {
        document.getElementById("button").className = 'show';
        document.getElementById("button").addEventListener('click', e =>{
            window.location.reload();
        });
    }

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
        
        if(playerPoints === 5 || computerPoints === 5){
            toggleButton();
            if(playerPoints > computerPoints){
                console.log(`You win by ${playerPoints}`)
                return;
            }else if(playerPoints< computerPoints){
                console.log(`You lose by ${computerPoints} points`)
                return;
            }else{
                console.log(`Draw You: ${playerPoints} Computer: ${computerPoints}`)
                return;
            }
        }
    }


