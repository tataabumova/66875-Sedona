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
