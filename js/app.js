$(document).ready (function(){

//Allow enter key to add items
	$(document).bind('keyup', function(e) {
        if(e.keyCode == 13){
            $(":submit").trigger('click');
        }
    });

	$(":submit").click(function(){

//Prevent empty input
		if (!$.trim($("#input").val())){
			alert("Buying empty boxes is pointless!");
		}

//Allow add button to add items
		else {
			$(".list").prepend("<li>" + $(input).val() + "</li>");
			$("input").val("");
		}
	});

});