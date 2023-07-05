let playerPoints = 0;
let computerPoints = 0;
const buttonSelection = document.querySelectorAll('[data-selection]')

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
        if(playerPoints === 5 || computerPoints === 5)
        
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


