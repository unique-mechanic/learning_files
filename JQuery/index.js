$("h1").css("color", "red");

$(document).keydown(function(){
    var t = event.key;
    $("h1").text(t);
});

$("#changeColor").click(function(){
    var tom1 = new Audio("tom-1.mp3");
    tom1.play();
});

