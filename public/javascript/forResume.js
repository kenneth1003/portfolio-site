

window.addEventListener('load', function(){
  if(window.innerWidth < 768){
  $('.dottedBorder2').css('border-right', '');
  $('.dottedBorder').css('border-left', '');
  $('.logo').css('width','30px');}
});
window.addEventListener('load', function(){

     if(window.innerWidth < 500){
           $('.myphoto').hide();
           $('.myphoto').removeClass('col-xs-8');
     };
});
/*window.addEventListener('resize', setWindowSize);

function setWindowSize() {
  if (typeof (window.innerWidth) == 'number') {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else {
    if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else {
      if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
      }
    }
  }if(myWidth < 768){
  $('.dottedBorder2').css('border-right', '');
  $('.dottedBorder').css('border-left', '');
  $('.logo').css('width','30px');

  }else{
$('.dottedBorder2').css('border-right', 'dotted 1px');
$('.dottedBorder').css('border-left', 'dotted 1px');
  $('.logo').css('width','50px');

  };
    if(myWidth < 500){
      $('.myphoto').hide();
    }else{
        $('.myphoto').show();
    }
};*/






$(document).ready(function(){
    $("img#nculogo").mouseover(function(){
        $('#master').slideToggle();
        $('#assistent').slideToggle();
    });
});
$(document).ready(function(){
    $("img#nculogo").mouseleave(function(){
        $('#master').slideToggle();
        $('#assistent').slideToggle();
    });
});
$(document).ready(function(){
    $("img#cyculogo").mouseover(function(){
        $('#bachelor').slideToggle();
    });
});
$(document).ready(function(){
    $("img#cyculogo").mouseleave(function(){
        $('#bachelor').slideToggle();
    });
});
$(document).ready(function(){
    $("img#armylogo").mouseover(function(){
        $('#officer').slideToggle();
    });
});
$(document).ready(function(){
    $("img#armylogo").mouseleave(function(){
        $('#officer').slideToggle();
    });
});
