function timing(){
    if (new Date().getHours() < 17){
        document.getElementById("today").innerHTML = "How's your day been?'";
    }
}

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good morning!";
    }
    else if (Time > 12 == Time > 18){
        Reply = "Good afternoon!";
    }
    else {
        Reply = "Good evening!";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}


function age_function(){
    Age = document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else {
        meal = "You are not currently old enough to vote :(";
    }
    document.getElementById("how_old_ru").innerHTML = Vote;
}
