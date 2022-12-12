const ComputerChoices=["rock","papper","scissors"];
const score=document.querySelector('.score');
let scorePlayer=0,
    scoreComputer=0;

function getComputerChoice(){
    let computerSelection=Math.floor(Math.random()*ComputerChoices.length);
    return ComputerChoices[computerSelection];
}

    function winner(firstChoice,secondChoice){
        if(firstChoice=="rock"){
            if(secondChoice=="rock"){
                return '=';
            }else if(secondChoice=="papper"){
                return 'l';
            }else if(secondChoice=="scissors"){
                return 'w';
            }
        }else if(firstChoice=="papper"){
            if(secondChoice=="rock"){
                return 'w';
            }else if(secondChoice=="papper"){
                return '=';
            }else if(secondChoice=="scissors"){
                return 'l';
            }
        }else if(firstChoice=="scissors"){
            if(secondChoice=="rock"){
                return 'l';
            }else if(secondChoice=="papper"){
                return 'w';
            }else if(secondChoice=="scissors"){
                return '=';
            }
        }
    }

    function playRound(palyerSelection,computerSelection){
        if(winner(palyerSelection,computerSelection)=="="){
            return 0;
        }
            if(winner(palyerSelection,computerSelection)=="w"){
            return 1;
        }
            if(winner(palyerSelection,computerSelection)=="l"){
            return 2;
        }
    }
    const buttons=document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',()=>{
            console.log(button.className);
            const palyerSelection=button.className;
            const computerSelection=getComputerChoice();
            console.log(computerSelection);
            const roundStatus=playRound(palyerSelection,computerSelection);
            if(roundStatus==1)
                scorePlayer++;
                else if(roundStatus==2)
                    scoreComputer++;
            if(scorePlayer==3){
                score.textContent='Player win game';
                scoreComputer=0;
                scorePlayer=0;
            }
            else if(scoreComputer==3){
                score.textContent='Computer win game';
                scoreComputer=0;
                scorePlayer=0;
            }else
            score.textContent=`P:${scorePlayer}     C:${scoreComputer}`;
        })
    })
    