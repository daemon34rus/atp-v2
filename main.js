
$(document).ready(function(){
	//$(".wrap").fadeIn("slow");
	// $(".slide1").animate({'opacity':'1'},500);
	// var divs =[".slide1", ".chapters", ".leadership", ".sponsors", ".contact"]
	// var posdiv = [];
	// var divsnum = 5;
	// for (i=0; i<divsnum; i++){
	// 	posdiv[i]=$(divs[i]).offset().top;
		//window.alert(posdiv[i]);
	}

	$(window).scroll(function(){
    var aboveHeight = $('#slide1').outerHeight();
//if scrolled down more than the header’s height
      if ($(window).scrollTop() > aboveHeight){

        // if yes, add “fixed” class to the <nav>
        // add padding top to the #content 
            (value is same as the height of the nav)
            $('.nav').addClass('fixed').css('top','0').next()
            .css('padding-top','60px');

            } else {

        // when scroll up or less than aboveHeight,
            remove the “fixed” class, and the padding-top
            $('.nav').removeClass('fixed').next()
            .css('padding-top','0');
            }
        });
		//var difference = currentPos - posdiv[0];
		//window.alert(difference);
		//navbar show on scroll down 100
		//if (difference >=-300){
		//	$(".nav").slideDown("150");
		//}
		//$(".wrap").each(function(){
			var offsets=$(this).offset().top;
			var pos=$(window).scrollTop();
			//window.alert(offsets+" "+pos);
			//if (offsets-pos<=400){
				//window.alert("foo");
				//$(this).animate({'opacity':'1'},500);
			//}
		//});

		// for (n=0; n<divsnum; n++){
		// 	var currentPoss = $(window).scrollTop();
		// 	if (currentPoss>posdiv[n] && currentPoss < posdiv[n+1]){
		// 		for(k=0; k<divsnum; k++){
		// 			$(divs[k]).removeClass("active");
		// 		}
		// 		$(divs[n]).addClass("active");
		// 		break;
		// 	}
		// }
		
	// });
	// $(".jumplink").click(function(){
	// 	$(".nav").slideUp("fast");
	// });
});
      var app = angular.module('sampleApp', []);
    app.controller('SampleCtrl', function($scope){
      $scope.people = [
      {
        'firstName':"Janson", 
        "lastName":"Chan", 
        "degrees":"BMSc",
        'position':'Founder, President of ATP',
        'info':"Janson is a 2013 Western University grad specializing in Biochemistry, and currently studying nursing at York University. Growing up with a brother with ASD has helped him understand the challenges and sacrifices similar families' have to make. As a nursing student representative, he has spoken and hosted multiple workshops discussing ATP at national Canadian nursing conferences.",
        'imgsrc':"http://jkcchan.me/atp-v2/src/janson 2.jpg",
        'linkedin':'https://www.linkedin.com/in/jansonchan'
      },
      {
        'firstName':"Brandon", 
        "lastName":"Wildfong", 
        "degrees":"BSc",
        'position':'Co-founder & Vice President of Operations',
        'info':'Brandon is a recent graduate from Western University, with a B.Sc in Physiology and Psychology. Along with Janson, they pioneered Autism Awareness clubs at Western and York and has helped build ATP from its conception.',
        'imgsrc':"http://jkcchan.me/atp-v2/src/brandon 2.jpg",
        'linkedin':'https://www.linkedin.com/pub/brandon-wildfong/a8/228/793?trk=pub-pbmap'
      },
      {
        'firstName':"Jillian", 
        "lastName":"Ferreira", 
        "degrees":"BSc",
        'position':'Director of Public Relations',
        'info':'Jillian graduated from UofT in 2013 specializing in Biochemistry, and is currently studying nursing at York University. She grew up with a sister diagnosed with autism and witnessed her struggle with school and be judged by others. ATP has allowed her to fight this stigma and help others like her sister.',
        'imgsrc':"http://jkcchan.me/atp-v2/src/jillian.jpg",
        'linkedin':'https://www.linkedin.com/pub/jillian-ferreira/b0/a82/639'
      },
      {
        'firstName':"Mamta", 
        "lastName":"Prajapati", 
        "degrees":"BSc",
        'position':'Program Director ',
        'info':'Mamta is a recent UofT graduate with a specialist degree in Psychology, and currently completing a post-grad diploma in Behavioral Science Technology at George Brown. She has a younger sister with cerebral palsy inspiring her to be an advocate for vulnerable populations.',
        'imgsrc':"http://jkcchan.me/atp-v2/src/mamta (2).jpg",
        'linkedin':'http://ca.linkedin.com/pub/mamta-prajapati/93/a94/567'
      },
      {
        'firstName':"Cindy", 
        "lastName":"Troung", 
        "degrees":"BSc",
        'position':'Director of Human Resources',
        'info':'Cindy graduated with her Bachelor of Science in Nursing from UOIT. She has maintained an active and passionate role as a volunteer within our program, earning her the title of Director of Human Resources.',
        'imgsrc':"http://jkcchan.me/atp-v2/src/cindy.jpg",
        'linkedin':''
      },
      {
        'firstName':"Shehan", 
        "lastName":"Ragavan", 
        "degrees":"BSc",
        'position':'Director of Finance',
        'info':"Shehan graduated from Queen’s University with his B.Sc in Genetics.  He is one of our behind the scenes member but actively engages with our participants and program every week!",
        'imgsrc':"http://jkcchan.me/atp-v2/src/shehan.jpg",
        'linkedin':''
      }];
    });
