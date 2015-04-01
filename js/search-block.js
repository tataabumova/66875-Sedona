/****************БЛОК ПОИСКА***********************/

var btn_search = document.querySelector(".btn--search");
var search_block = document.querySelector(".search-block");

btn_search.addEventListener("click", function(event) {
	event.preventDefault();
	search_block.classList.toggle("search-block--visible");
});


/*******************МЕНЮ*****************************/

var btn_open = document.querySelector(".btn--open");
var btn_close = document.querySelector(".btn--close");
var mobile_nav = document.querySelector(".mobile-nav");

btn_open.addEventListener("click", function(event) {
	event.preventDefault();
	mobile_nav.classList.toggle("mobile-nav--visible");
});

btn_close.addEventListener("click", function(event) {
	event.preventDefault();
	mobile_nav.classList.remove("mobile-nav--visible");
});

/***************КНОПОЧКИ+/-*************************/

var minus = document.querySelectorAll(".btn--minus");
var plus = document.querySelectorAll(".btn--plus");
var parent_count = document.querySelectorAll(".search-form__count");


for (var i=0; i < parent_count.length; i++){
parent_count[i].addEventListener("keypress", function(event) {
	if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault(); 
    }  
});
};


for (var i=0; i < minus.length; i++){
	var elemMinus = minus[i];
	elemMinus.addEventListener("click", function(e){
		e.preventDefault();
		var input = this.parentElement.querySelector(".search-form__count");
		var a = input.value;
		
		if (input.className.indexOf("search-form--child") != -1 && (a<=0)) {
			input.value = 0;
		} else if (input.className.indexOf("search-form--child") == -1 && (a<=1)) {
			input.value = 1;
		} else {
			input.value = input.value - 1;
		}
	});
}
for (var i=0; i < plus.length; i++) {
	var elemPlus = plus[i];
	elemPlus.addEventListener("click", function(e){
		e.preventDefault();
		var input = this.parentElement.querySelector(".search-form__count");
		var a = input.value;

		input.value = Number(a) + 1;

	});
}
