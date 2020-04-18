
let userScore = 0 ;
let compScore = 0 ;
const userScore_span = document.getElementById("user-scores");
const compScore_span = document.getElementById("computer-scores");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.getElementById("result")
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");
const choice_div = document.querySelector(".choice");
const user_id = document.getElementById("user");
const comp_id = document.getElementById("comp");
let compStatus = false ;




function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter){
    if(letter ==="r") return "Rocks";
    if(letter ==="s") return "Scissors";
    else return "Paper";
}


function Status(status){
    if(status === true){
        user_id.style.backgroundColor="blue";
        comp_id.style.backgroundColor="brown";
    }else if (status === false){
        user_id.style.backgroundColor="brown";
        comp_id.style.backgroundColor="blue";
    }
   
}



function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result.innerHTML= converToWord(userChoice) + " VS " + converToWord(computerChoice) +"<br />"+ "You win"; 
    Status(true);
}


function loss(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result.innerHTML= converToWord(userChoice) + " VS " + converToWord(computerChoice) +"<br />"+ "You loss"; 
    Status(false);
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result.innerHTML= converToWord(userChoice) + " VS " + converToWord(computerChoice) +"<br />"+ "its draw";  
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice)
            break ; 
        case "rp":
        case "ps":
        case "sr":
           loss();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r")
    });
    paper_div.addEventListener('click',function(){
        game("p")
    });
    scissor_div.addEventListener('click',function(){
        game("s")
    });
}

main();