//mobile menu button
const navSlide = () => {
	const burger = document.querySelector('.nav__burger');
	const nav = document.querySelector('.nav__wrapper');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('burger-menu__btn-active');
	});
}

navSlide();

//contact button
const Contact = () => {
	const ContBtn = document.querySelector('.contact_button');
	const modal = document.querySelector('.modal');

	ContBtn.addEventListener('click', () => {
		
		modal.style.display = "flex";
	});
}

Contact();
//close modal
const CloseModal = () => {
	const CloseBtn = document.querySelector('.modal-work__close');
	const modal = document.querySelector('.modal');

	CloseBtn.addEventListener('click', () => {
		
		modal.style.display = "none";
	});
}

CloseModal();


//Skill slider
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({

		items: 1,
	    loop:true,
	    center:true,
	    autoWidth:true,
	    margin: 50000,

	   	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:1
        	},
        	1000:{
           		items:1
       		}
       	}
	      
	});

	let headerSlider = $('.owl-carousel');
	headerSlider.owlCarousel();
// Go to the next item
	$('.skills-slider__arrow-right').click(function() {
    	headerSlider.trigger('next.owl.carousel');
	})
// Go to the previous item
	$('.skills-slider__arrow-left').click(function() {
   	 	headerSlider.trigger('prev.owl.carousel', [300]);
	})

});

//Animate on scrol
var $window = $(window);
var $elem = $(".skills-slider")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("skill-appear_anim")
    }
});