
window.addEventListener('load', function(){

     if(window.innerWidth < 500){
           $('.myphoto').hide();
           console.log(window.innerWidth);
     }
});
$(document).ready(function(){
    $('#loading').attr('src', 'project/loading-bounce.html');    
});
$(document).ready(function(){
    $('.calculator1').attr('src', 'project/calculator.html');    
});
$(document).ready(function(){
    $('.timer').attr('src', 'project/timer.html');    
});
$(document).ready(function(){
    $('.quote').attr('src', 'project/quote.html');    
});
$(document).ready(function(){
    $('.tic').attr('src', 'project/tic.html');    
});
/*$(document).ready(function(){
    $('.login').attr('src', 'auth/index');    
});*/


$(document).ready(function(){
    $('.projectIns').fadeIn();
});

$(document).ready(function(){
    $("#btnCal").click(function(){
        $('.calculator1').slideToggle();
        $('#loading').fadeToggle();
        $('.project').not('#btnCal').fadeToggle();
        $("#btnCal").animate({left: '250px'});
    });
});
$(document).ready(function(){
    $("#btnTimer").click(function(){
    $('.timer').slideToggle();
    $('#loading').fadeToggle();
    $('.project').not('#btnTimer').fadeToggle();
    });
});
$(document).ready(function(){
    $("#btnQuote").click(function(){
    $('.quote').slideToggle();
    $('#loading').fadeToggle();
    $('.project').not('#btnQuote').fadeToggle();
    });
});
$(document).ready(function(){
    $("#btnTic").click(function(){
    $('.tic').slideToggle();
    $('#loading').fadeToggle();
    $('.project').not('#btnTic').fadeToggle();
    });
});
$(document).ready(function(){
    $("#btnLogin").click(function(){
    $('.login').slideToggle();
    $('#loading').fadeToggle();
    $('.project').not('#btnLogin').fadeToggle();
    });
});