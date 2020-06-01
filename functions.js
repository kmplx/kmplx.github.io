$(document).ready(function(){
    
    

    $("#btnAbout").click(function(){
        $("html,body").animate({
            scrollTop: $("#About").offset().top
        }, 1500);
    });

    $(".toTop").click(function(){
        $("html,body").animate({
            scrollTop: $("html, body").offset().top
        }, 1500);
    })

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();

        
        if(scroll > (wHeight-200)){
            $(".toTop").addClass("show", 2000, "easeInOutQuad");
        }else{
            $(".toTop").removeClass("show", 1000, "easeInOutQuad");
        }
    });
   


})