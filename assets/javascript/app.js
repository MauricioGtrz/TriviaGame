

function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];
    
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break;
        }
    }
    return val;
}

setTimeout(timeUp, 1000 * 120);

var intervalId = setInterval(count, 1000);

var time = 120;

function count() {
    time--;
    var converted = timeConverter(time);
    $("#countdown").text(converted);

}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    return minutes + ":" + seconds;
}

  

function timeUp() {

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

    clearInterval(intervalId);

    function getRadioVal(form, name) {
        var val;
        var radios = form.elements[name];
        
        for (var i=0, len=radios.length; i<len; i++) {
            if ( radios[i].checked ) { 
                val = radios[i].value; 
                break; 
            }
        }
        return val; 
    }

    var answer1 = getRadioVal( document.getElementById('question1'), 'answer1' );
    var answer2 = getRadioVal( document.getElementById('question2'), 'answer2' );
    var answer3 = getRadioVal( document.getElementById('question3'), 'answer3' );
    var answer4 = getRadioVal( document.getElementById('question4'), 'answer4' );
    var answer5 = getRadioVal( document.getElementById('question5'), 'answer5' );

    function checkCorrect(answer) {
        if (answer == "correct"){
            correct++;
        }
        else if (answer == "wrong"){
            wrong++;
        }
        else unanswered++;
    }

    checkCorrect(answer1);
    checkCorrect(answer2);
    checkCorrect(answer3);
    checkCorrect(answer4);
    checkCorrect(answer5);


    $('#gameContainer').html("<h1>Let's see how you did!</h1><br>");
    $('#gameContainer').append('<h1>Right answers: ' + correct + "</h2>");
    $('#gameContainer').append('<h1>Wrong answers: ' + wrong) + "</h2>";
    $('#gameContainer').append('<h1>Unanswered: ' + unanswered) + "</h2>";
}



window.onload = function() {
    $("#button").on("click", function () {
    timeUp();
    });
};
