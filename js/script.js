$(function(){ //same as document.addeventListener("DOMContentLoaded",..)
    $("#navbar-toggle").blur(function(event){ // same as document.querySelector.addeventListener("blur",..)
    	var screenWidth = window.innerWidth;
    	if (screenWidth < 768) {
    		$("#collapsable-nav").collapse('hide');
    	}
    });

});