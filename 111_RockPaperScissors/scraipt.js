let userScore = 0, compScore = 0;
const userScore_span = document.getElementById("user-scr"),
      compScore_span = document.getElementById("comp-scr"),
      scoreBoard_div = document.querySelector(".score-board"),
      result_p = document.querySelector(".result > p"),
      rock_div = document.getElementById("r"),
      paper_div = document.getElementById("p"),
      scissors_div = document.getElementById("s");
    
function compChoice(){
    const choices = ['r', 'p', 's'],
          variant = Math.floor(Math.random() * 3);
    return choices[variant];
}

function convert(option){
    if (option == 'r') return "Rock";
    else if (option == 'p') return "Paper";
    else return "Scissors";
}

function win(user, computer){
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const SmallUserWord = "(User)".fontsize(3).sub();
    const SmallCompWord = "(Computer)".fontsize(3).sub();
    result_p.innerHTML = `${convert(user)}${SmallUserWord} beats ${convert(computer)}${SmallCompWord} . You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('green-glow')}, 1500);
}

function lose(user, computer){
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const SmallUserWord = "(User)".fontsize(3).sub();
    const SmallCompWord = "(Computer)".fontsize(3).sub();
    result_p.innerHTML = `${convert(computer)}${SmallCompWord} beats ${convert(user)}${SmallUserWord} . You lose!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('red-glow')}, 1500);
}

function draw(user, computer){
    const SmallUserWord = "(User)".fontsize(3).sub();
    const SmallCompWord = "(Computer)".fontsize(3).sub();
    result_p.innerHTML = `${convert(user)}${SmallUserWord} equals ${convert(computer)}${SmallCompWord} . It's a draw!`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('gray-glow')}, 1500);
}

function game(userChoice){
    const opponent = compChoice();
    switch (userChoice + opponent){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, opponent);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, opponent);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, opponent);
            break;
        
    }
}

function main(){
    rock_div.addEventListener("click", function() {
        game("r");
    })
    paper_div.addEventListener("click", function() {
        game("p");
    })
    scissors_div.addEventListener("click", function() {
        game("s");
    })
}

main();