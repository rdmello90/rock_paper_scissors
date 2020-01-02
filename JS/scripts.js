
function computerPlay()
{
    const num = Math.floor(Math.random() * 3);
    return num;
}

let getPlayerNumber = function(playerInput)
{
    playerInput = playerInput.toLowerCase();
    if (playerInput === "rock")
    {
        return 0;
    }
    else if (playerInput === "paper")
    {
        return 1;
    }
    else if (playerInput === "scissors")
    {
        return 2;
    }
    else 
    {
        return "not valid input";
    }
}


function playRound(playerSelection, computerSelection)
{
    // if selection is the same
    if(playerSelection === computerSelection)
    {
        return String("Tie");
    }

    // if player selects rock
    if(playerSelection === 0)
    {
        if(computerSelection === 1)
        {
            return String("You Lose! Paper beats Rock");
        }
        else
        {
            return String("You Win! Rock beats Scissors");
        }
    }
    
    // if player selects paper
    if(playerSelection === 1)
    {
        if(computerSelection === 0)
        {
            return "You Win! Paper beats Rock";
        }
        else
        {
            return "You Lose! Scissors beats Paper";
        }
    }

    // if played selects scissors
    if(playerSelection === 2)
    {
        if(computerSelection === 0)
        {
            return "You Lose! Rock beats Scissors";
        }
        else
        {
            return "You Win! Scissors beats paper";
        }
    }
}

// let i;
for(let i = 0; i < 5; i++)
{
    const playerInput = prompt("Player Input");
    const playerSelection = getPlayerNumber(playerInput);
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}