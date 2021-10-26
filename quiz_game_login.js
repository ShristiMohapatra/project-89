player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");

document.getElementById("player_1_name").innerHTML = player1_name+" : ";
document.getElementById("player_2_name").innerHTML = player2_name+" : ";

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

function addUser(){
    player1_name = document.getElementById("player1_input").value;
    player2_name = document.getElementById("player2_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "quiz_game_page.html";
}

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
}

question_number = "<h4>"+number1+"X"+number2+"</h4>";
