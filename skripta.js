//console.log("Hello World!")
function getHumanChoice(){

    let choice = prompt("rock, paper or scissors ?")
    if(choice === "rock" || choice === "paper" || choice === "scissors")
    {
        return choice;
    }
    return "invalid";

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
}
//console.log(getHumanChoice());
//console.log(getComputerChoice());
let humanScore = 0;
let computerScore = 0;