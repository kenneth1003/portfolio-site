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
    if(myWidth < 500){
      $('.myphoto').hide();
    }else{
        $('.myphoto').show();
    }
};*/

window.addEventListener('load', function(){

  if(window.innerWidth < 1200){
    $('#myCanvas').hide();
  }
     if(window.innerWidth < 500){
           $('.myphoto').hide();
     }
});