$(document).on("ready", function(){

 var boxes = $("body input");

 var seenEpisodes = JSON.parse(localStorage.getItem("checkedBoxes"));
 for(var i = 0; i < boxes.length; i++) {
	if(seenEpisodes != null && seenEpisodes[i] == "t"){
		$(boxes[i]).attr("checked","checked");
	}}
	
	$(boxes).on("click",function(){
	
	var checkedBoxes = [];
	 for(var i = 0; i < boxes.length; i++) {
	 if(boxes[i].checked){
	 checkedBoxes.push("t");
	 }else{
	 checkedBoxes.push("f");
	 }
	 }
	 localStorage.setItem("checkedBoxes",JSON.stringify(checkedBoxes));
	});
 
});