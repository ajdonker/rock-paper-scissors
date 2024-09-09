//console.log("Hello World!")
function getHumanChoice(){

    let choice = prompt("rock, paper or scissors ?")
    if(choice === "rock" || choice === "paper" || choice === "scissors")
    {
        return choice;
    }
    return "invalid";
    //console.log("You entered:" getHumanChoice());

}

function getComputerChoice()
{
    let number = Math.ceil(Math.random()*10) % 3;
    // 0 - rock, 1 - paper, 2- scissors
    if(number === 0)
    {
        return "rock";
    }
    else if (number === 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
    //console.log("the computer threw:" getComputerChoice());

}
//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice)
{
    let humanChoice = getHumanChoice();
    let ComputerChoice = getComputerChoice();
    if(humanChoice === ComputerChoice)
    {
        console.log("tie, neither wins");
        return; 
    }
    else{
        if(humanChoice === "rock")
        {
            if(computerChoice === "scissors")
            {
                console.log("human win.");
                humanScore++;
                console.log("Score:",humanScore,"for human,",computerScore," for pc");
                return;
            }
            else
            {
                console.log("pc win.");
                computerScore++;
                console.log("Score:",humanScore,"for human,",computerScore," for pc");
                return; 
            }
        }

    }
}