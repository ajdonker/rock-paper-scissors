//console.log("Hello World!")
playGame();
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(var i = 0 ; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("the computer threw:",computerSelection);
        playRound(humanSelection,computerSelection);
    }

    return;




    function playRound(humanChoice,computerChoice)
{
    //let humanChoice = getHumanChoice();
    //let ComputerChoice = getComputerChoice();
    
    if(humanChoice === computerChoice)
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
        else if(humanChoice === "paper")
        {
            if(computerChoice === "scissors")
                {
                    console.log("computer win.");
                    computerScore++;
                    console.log("Score:",humanScore,"for human,",computerScore," for pc");
                    return;
                }
                else
                {
                    console.log("human win.");
                    humanScore++;
                    console.log("Score:",humanScore,"for human,",computerScore," for pc");
                    return; 
                }
        }
        else{ // human choice is scissors
            if(computerChoice === "rock")
                {
                    console.log("computer win.");
                    computerScore++;
                    console.log("Score:",humanScore,"for human,",computerScore," for pc");
                    return;
                }
                else
                {
                    console.log("human win.");
                    humanScore++;
                    console.log("Score:",humanScore,"for human,",computerScore," for pc");
                    return; 
                }

        }
 
    }


}
function getHumanChoice(){

    let choice = prompt("rock, paper or scissors ?").toLowerCase();
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

}

}


//console.log(getHumanChoice());


