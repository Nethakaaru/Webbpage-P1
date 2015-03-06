$(document).on("ready", function(){


 var layout = $("body h2");
 var chosenLayout = JSON.parse(localStorage.getItem("chosenLayout"));
 
function red(){
	$("body").css("color","red");
	$("body nav").css("border-color","red");

}
		
function blue(){
	$("body").css("color","blue");
	$("body nav").css("border-color","blue");

}

function green(){
	$("body").css("color","green");
	$("body nav").css("border-color","green");

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
		
		
		$(layout[0]).on("click",function(){
			localStorage.setItem("chosenLayout",JSON.stringify(0));
			red();
				alert("You chose red colour");
		})
		$(layout[1]).on("click",function(){
			localStorage.setItem("chosenLayout",JSON.stringify(1));
			blue();
				alert("You chose blue colour");
		})
		$(layout[2]).on("click",function(){
			localStorage.setItem("chosenLayout",JSON.stringify(2));
			green();
				alert("You chose green colour");
		})
});