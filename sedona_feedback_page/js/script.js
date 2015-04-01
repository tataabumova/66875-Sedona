var minus = document.querySelectorAll(".minus");
var plus = document.querySelectorAll(".plus");
var counter_input = document.querySelectorAll(".counter-input");

for (var i=0; i < counter_input.length; i++){
counter_input[i].addEventListener("keypress", function(event) {
	if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault(); 
    }  
});
};



for (var i=0; i < minus.length; i++){
	var elemMinus = minus[i];
	elemMinus.addEventListener("click", function(e){
		e.preventDefault();
		var input = this.parentElement.querySelector(".counter-input");
		var a = input.value;
		
		if (input.className.indexOf("children-count") != -1 && (a<=0)) {
			input.value = 0;
		} else if (input.className.indexOf("children-count") == -1 && (a<=1)) {
			input.value = 1;
		} else {
			input.value = input.value - 1;

			var new_elements = document.querySelectorAll(".row.new_element");

			if (new_elements.length > 0) {
				document.querySelector(".step.step2.same-row").removeChild(new_elements[new_elements.length - 1]);
			}

		}
	});
};
for (var i=0; i < plus.length; i++) {
	var elemPlus = plus[i];
	elemPlus.addEventListener("click", function(e){
		e.preventDefault();
		var input = this.parentElement.querySelector(".counter-input");
		var a = input.value;

		input.value = Number(a) + 1;

		if (input.className.indexOf("travel-time") == -1) {
			var guestType = "Взрослого №" + a;
			var guestClass = "adult-row";
			if (input.className.indexOf("children-count") != -1) {
				guestType = "Ребенка №" + (Number(a) + 1);
				guestClass = "child-row";
			}
			var div = document.createElement("div");
			div.className = "row new_element " + guestClass;
			div.innerHTML = "<div class='col s-4'><label for='text1'>Фамилия " + guestType + ": <span>*</span></label><input type='text' name='lastname' class='lastname'></div><div class='col s-4'><label for='text2'>Имя " + guestType + ": <span>*</span></label><input type='text' name='firstname' class='firstname'></div><div class='col s-4'><label for='text3'>Отчество " + guestType + ": </label><input type='text' name='middlename' class='middlename'></div>";

			document.querySelector(".step.step2.same-row").appendChild(div);
		};
	});
};





