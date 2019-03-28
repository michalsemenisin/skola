$(function(){
    $('#nadpis h2').click(function(){
        if ($(this).nextUntil('h2').is(':hidden')) {
            $(this).css({'background-color':'#222'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h2').toggle(1000);
    });
    
    var i = 0;
    window.setInterval(function(){
        $('#galerie img').attr('src','img/'+planety[i].photo);
        $('#galerie figcaption').text(planety[i].popisek);
        i<planety.length-1 ? i++ : i=0; 
    }, 3000);
    
   
$("#quiz-form").on("submit", function(event) {
        event.preventDefault();
        var $answer = $("#quiz-answer"); 
        var answer = $answer.val();
        if (answer === "1988") {
            $("#result").text("Správně!");
        } else {
            $("#result").text("Zkus to znovu!");
        }
    });
})

