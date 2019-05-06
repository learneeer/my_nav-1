var burger = document.querySelector(".fa-bars");
var div1   = document.querySelector(".div1");
var div2   = document.querySelector(".div2");
var div3   = document.querySelector(".div3");
var div4   = document.querySelector(".div4");

var new_page = document.querySelector(".new_page");

var fa_bars = document.querySelector(".fa-bars");

burger.addEventListener("click", function(){
	div1.classList.toggle("opacity_div1");
	div2.classList.toggle("opacity_div2");
	div3.classList.toggle("opacity_div3");
	div4.classList.toggle("opacity_div4");

	new_page.classList.toggle("new_page_active");

	fa_bars.classList.toggle("fa-bars_active");

});








