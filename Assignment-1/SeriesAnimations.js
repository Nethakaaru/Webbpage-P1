$(document).on("ready", function(){

$("h1.serieHeader").next().fadeOut();

$("h1.serieHeader").on("click",function(){$(this).next().slideToggle()});

});