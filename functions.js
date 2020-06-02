$(document).ready(function(){
    
    

    $("#btnAbout").click(function(){
        $("html,body").animate({
            scrollTop: $("#About").offset().top
        }, 1500);
    });

    $("#btnLetsTalk").click(function(){
        $("html,body").animate({
            scrollTop: $("#Contact").offset().top
        }, 1500);
    });

    $(".toTop").click(function(){
        $("html,body").animate({
            scrollTop: $("html, body").offset().top
        }, 1500);
    });

    $("#btnPlayer").click(function(){
        
            $(".player").toggleClass('showplayeraction');
            $("html,body").toggleClass('overflowhide');
            
            $("p").toggleClass('activep');

            if(!($(".header").hasClass('activeheader'))){
                $(".header").addClass('activeheader');
            };
        
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();

        if(scroll>5){
            $(".header").addClass("activeheader", 2000, "easeInOutQuad");
        }else{
            $(".header").removeClass("activeheader", 1000, "easeInOutQuad");
        }
        
        if(scroll > (wHeight-200)){
            $(".toTop").addClass("show", 2000, "easeInOutQuad");
        }else{
            $(".toTop").removeClass("show", 1000, "easeInOutQuad");
        }
    });
   


})