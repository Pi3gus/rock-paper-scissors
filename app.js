const getComputerChoice = ()=>{
    const choices = ['rock','paper','scissors']
    const random = Math.floor(Math.random() *3);
    const choice = choices[random];
    console.log(choice);
}
getComputerChoice();