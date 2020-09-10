

(function ($) {
    "use strict";


     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });
    });


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
      e.stopImmediatePropagation();
       var check = true;

      for(var i=0; i<input.length; i++) {
           if(validate(input[i]) == false){
               showValidate(input[i]);
               check=false;
           };
       };

       return check;
   });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
       if($(input).attr('type') == 'text' || $(input).attr('name') == 'text') {
            if($(input).val().trim().match() == null) {
                return false;
            }
        }
       else {
           if($(input).val().trim() == ''){
               return false;
             }
           }
        }

   function showValidate(input) {
      var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
      }

   function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
      }

      /*----------------- main mainScreen*/


  /*    $('.center .menu i ').on('click' , function () {
        if($('.center .list').is('hidden')){
          $('.center .list').addClass('active');
        }else {
          $('.center .list').removeClass('active').addClass('notactive');

        }

      });*/

        /*-----tasks----*/
        $('.tasks  ' ).click(function(){

            $('.tsk ').show('6000');
        });
        $('.mediaPlayer ' ).click(function(){
            $('.msc ').show('6000');
        });
    $('.managesys ' ).click(function(){
        $('.popupterminal ').show('6000');
    });
//////////////inside media player parent
    $('.player' ).click(function(){
        $('.cal  ').show('6000');
    });
///////////////////////////////////////////
    $('.control ' ).click(function(){
            $('.ctl  ').show('6000');
    });
/////////////////////////////////////////////
$('.camera ' ).click(function(){
    $('.popupcamera  ').show('6000');
    var iframe = document.getElementById("editframe");
    var elmnt = iframe.contentWindow.document.getElementById('navbar1');
   console.log('ggghhhhh',elmnt)
   
    elmnt.style.margin = "0px 0px 0px 200px";




});


        $('.call ' ).click(function(){
        //    $('.cal').show('6000');
        });

///////////////////////////////    2nd list /////////////////////////////////////
    $(' .menu i ').on('click' , function () {
        $('.center .list').toggleClass('active');
    });


    $('.userinfo' ).click(function(){

        $('.usrinfo').show('6000');
    });


    $('.themes' ).click(function(){

        $('.themesmenu').show('6000');
    });

    $('.bclose' ).click(function(){
      


        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{console.log(xhr.readyState);if(xhr.readyState===4&&xhr.status===200){window.location = '/logout'}  }
        xhr.open('post','/logout',true)
        xhr.send()




       // window.location = '/logout'


    });

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////         hide out the pop up        //////////////////////////////////////////////////
        $('.tsk').click(function(){///////////////////////////////////////////////////////////////////////////////////////////
            $(this).hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        });///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('.msc ').click(function(){///////////////////////////////////////////////////////////////////////////////////////////
        $(this).hide('slow');
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }); $('.ctl').click(function(){///////////////////////////////////////////////////////////////////////////////////////////
        $(this).hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }); $('.cal ').click(function(){///////////////////////////////////////////////////////////////////////////////////////////
        $(this).hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }); $('.themesmenu ').click(function(){///////////////////////////////////////////////////////////////////////////////////////////
        $(this).hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });
    $('.popupterminal ' ).click(function(){
        $(this).hide('6000');
    });

    $('.usrinfo ' ).click(function(){
        $(this).hide('6000');
    });
    $('.popupcamera ' ).click(function(){
        $(this).hide('6000');
    });
/////////////////////////////////////////////////                never hide inside               /////////////////////////////////////////////////
        $('.tsk .popupInner , .msc .popupInner, .ctl .popupInner , .cal .popupInner , .themesmenu  .popupInner, .popupcamera .popupInner ,  .popupterminal .popupInner , .usrinfo .popupInner').click(function(e){//////////////////////////////////////////
          e.stopPropagation();////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        });///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









        /////////////////////////////////////////////////////////      close button click       //////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////          close call              /////////////////////////////////////////////
    $('.closecall').click(function(){////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.cal ').hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    $('.closectl').click(function(){////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.popupterminal ').hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });

    $('.closectl').click(function(){////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.popupcamera ').hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////          close control            //////////////////////////////////////////////////////
    $('.closectl').click(function(){////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.ctl').hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////          close media            ////////////////////////////////////////////////////////
    $('.closemsc').click(function(){////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.msc ').hide('slow');////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////          close tasks            ////////////////////////////////////////////////////////
    $('.closetsk').click(function(){////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.tsk').hide('slow');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ////$('.cal').click(function(){<!--from   www  .ja  va2s . com-->
   //     $().css("color", "red").val("value")
    //});

//////////////////////////////////////////////////////////////////change themes ////////////////////////////////////////////////


   // $(document).ready(function(){
     //   $('.themes').click(function(){
        //    $('.themesmenu').show('6000');

       // });
   // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




        $('.from-left').hover(function () {

          $(this).find('span').eq(0).animate({
            width :'100%' ,
          },500);

        }, function() {
          $(this).find('span').eq(0).animate({
            width :'0%'
          },500);

        });







})(jQuery);