
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

var switchIndex = localStorage.getItem("switchIndex");
if(switchIndex == undefined){
var switchIndex = 0;
localStorage.setItem("switchIndex", switchIndex);
}
$(document).ready(function(){
	if(switchIndex == 0){
       $('#jumbotron').css('display', 'inherit');

    }else{

          $('#jumbotron').slideDown();
          switchIndex = 0;
    }
    localStorage.setItem("switchIndex", switchIndex);
});
$(document).ready(function(){
    if($('p.projectIns').html() != undefined){
            $('#jumbotronPro').slideUp();
    switchIndex += 1;
    localStorage.setItem("switchIndex", switchIndex);
    }
});


