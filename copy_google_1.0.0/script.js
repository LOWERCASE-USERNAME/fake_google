document.addEventListener("DOMContentLoaded", function(){
	document.querySelector("#gg_search_btn").addEventListener("click", function() {
		var user_input = document.querySelector("#gg_search").value;
		var input_length = user_input.length;
		var gg_link = "https://www.google.com/search?q=";
		if (ValidSearch() == true) {
			var input_char = user_input.split(" ");
			var gg_link_query = input_char.join("+");
			gg_link += gg_link_query;
			document.location.href = gg_link;
		} else {
			return;
		}
		function ValidSearch() {
			if (input_length == 0) {
				return false;
			} else {
				return true;
			}
		}		
	})
})