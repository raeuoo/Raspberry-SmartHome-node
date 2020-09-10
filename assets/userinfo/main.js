
$(document).ready(function(){
    $(".edit-info").click(function(){
      $(".profile-card").css("transform", "rotateY(180deg)");
      $(".back").css("transform", "rotateY(0)");
     
    });
    $('.cancel').click(function(event){
      event.preventDefault();
      $(".back").css("transform", "rotateY(-180deg)");
      $(".profile-card").css("transform", "rotateY(0)");
  
    });  
  
  });
  
  