var btn_search = document.querySelector(".btn--search");
var search_block = document.querySelector(".search-block");

btn_search.addEventListener("click", function(event) {
	event.preventDefault();
	search_block.classList.toggle("search-block--visible");
});
