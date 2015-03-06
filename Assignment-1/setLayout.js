$(document).on("ready", function(){

 var chosenLayout = JSON.parse(localStorage.getItem("chosenLayout"));
 
function red(){
	$("body").css("color","red");
	$("body nav").css("border-color","red");
		$("body section").css("border-color","red");
}
		
function blue(){
	$("body").css("color","blue");
	$("body nav").css("border-color","blue");
		$("body section").css("border-color","blue");
}

function green(){
	$("body").css("color","green");
	$("body nav").css("border-color","green");
	$("body section").css("border-color","green");
}

		if(chosenLayout!=null){
			if(chosenLayout == 0){
				red();
		} else if(chosenLayout == 1){
				blue();
		} else if(chosenLayout ==2){
				green();
			}
		}
});