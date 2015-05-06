$(document).ready (function(){

	//Allow enter key to add items
	$("form").submit(function(event){
		event.preventDefault();


		//Prevent empty input
		if (!$.trim($("#input").val())){
			alert("Buying empty boxes is pointless!");
		}

		//Allow add button to add items
		else {
			$(".list").prepend('<li><i class="fa fa-check-square"></i><i class="fa fa-trash"></i><i class="fa fa-check"></i>' + $(input).val() + "</li>");
			$(".fa-check").hide();
			$("input").val("");
		}
	});

	//Delete items permanently	
	$(document).on("click", ".fa-trash", function(){
    	$(this).closest("li").fadeOut(200);
	});

	//Cross off items and send them to the bottom of the list
	$(document).on("click", ".fa-check-square", function(){
		$(this).closest("li").addClass("completed");
		$(this).closest(".fa-check-square").hide();
		$(this).nextAll(".fa-check").show();
		$(this).closest("li").appendTo(".list");
	});

	//Uncheck items and send them to the top of the list
	$(document).on("click", ".fa-check", function(){
		$(this).closest("li").removeClass("completed");
		$(this).prevAll(".fa-check-square").show();
		$(this).closest(".fa-check").hide();
		$(this).closest("li").prependTo(".list");
		
	});

});