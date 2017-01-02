//animation for landing page appearance.

$(document).ready(function(){
$('.landing-page-inside').animate({
  opacity: '1',
  top: '-15px'
  },1100);
});

//animation for work page $ connect page apperance.

$(document).scroll(function(){
	console.log("hello");
 var pagescroll = $(document).scrollTop(),
 workposition = $('.work-animate-page').offset().top,
 connectposition = $('.connect-page-animate').offset().top;
 console.log(workposition);
 console.log(pagescroll);

 if(pagescroll >= workposition - 800){
 	$('#js-work-animate-page').animate({
 		opacity : '1',
 		top : '0'
 	}, 1500);
  }

  if(pagescroll >= connectposition  - 800){
  	$('.style-connect-page-animate').animate({
  		opacity : '1',
  		top : '0'
  	}, 1300);
  }
});

//scroll class from navbar

$(document).ready(function() {
        $(".about").on("click", function(e) {
            $("body, html").animate({
                scrollTop: $("#js-landing-page").offset().top
            }, 300);
            e.preventDefault();
        });

        $(".work").on("click", function(e) {
            
            $("html, body").animate({
                scrollTop: $("#js-work-page").offset().top
            }, 500);
            e.preventDefault();
        });

        $(".connect").on("click", function(e) {
            $("body, html").animate({
                scrollTop: $("#js-connect-page").offset().top
            }, 600);
            e.preventDefault();
        });
    }); 



