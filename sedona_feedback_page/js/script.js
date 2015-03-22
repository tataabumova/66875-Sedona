var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var travel_time = document.querySelector(".travel-time");


function plus_minus(input_class,operation,event){
	event.preventDefault();
	var input = document.querySelector(input_class);
	var a = input.value;

	if (operation == "minus") {
		if ((input_class != ".children-count") && (a<=1)) {
			input.value = 1;
		} else if((input_class == ".children-count") && (a<=0)){
			input.value = 0;
		} else {
			input.value = a - 1;
		}
	} else {
		input.value = Number(a) + 1;
	}
}


travel_time.addEventListener("keypress", function(event) {
	if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault(); 
    }  
});
