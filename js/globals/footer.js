/*==---------------------------------------------------------====
    JS - Black footer Bar - li elements to divide to 2 cols if greater than 5 | Hide/Show Fat Footer Columns 
====---------------------------------------------------------==*/
$( document ).ready(function() {

    function openFeedbackForm() {

    }
    
    function multiColumnizeLists(elementsToColumnize, maxLines) {
          Array.prototype.slice.call(
            document.querySelectorAll(elementsToColumnize)
          ).forEach(function(element) {
            var items = element.children.length;
            var columns = Math.ceil(items / maxLines);
            
            if (columns > 1) {
              element.classList.add('columns-' + columns);
            }
          });
        }
         multiColumnizeLists('.fat__footer ul', 5); 

/*==--------------====  Hide/Collapse Columns based on View-width ====------------------==*/
       
    // Add the children toggle functionality.
    $(".fat__footer").find('i.expand').click(function() {
                  
        $(this).parent().next('.fat__footer__navigation-links').slideToggle('1000');
        // The 'open' class is for the child icon.    
        $(this).toggleClass('open');
        
        return false;
    });
    
    $(".fat__footer").find('span.expand').click(function() {
                  
        $(this).parent().next('.fat__footer__navigation-links').slideToggle('1000');
        // The 'open' class is for the child icon.    
        $(this).toggleClass('open');
        
        return false;
    });

/*==--------------====  Hide/Collapse forms on click ====------------------==*/    

    
    $('.buttoncontact__panel__feedback__button').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $('.feedback-panel').slideUp(250);
        } 
        else {
            $(this).addClass("active");
            $('.feedback-panel').slideDown(250);
        }
    });
    
    $("#input_feedback").click(function() {
        if ( $(this).hasClass("active")) {
        }
        else {
            removeActive();
            $(this).addClass("active");
            $(".feedback-about").slideDown(250);
        }
    });
    $("#input_compliment").click(function() {
        if ( $(this).hasClass("active")) {
        }
        else {
            removeActive();
            $(this).addClass("active");
            $(".feedback-compliment").slideDown(250);
        }
    });
    $("#input_enquiry").click(function() {
        if ( $(this).hasClass("active")) {
        }
        else {
            removeActive();
            $(this).addClass("active");
            $(".feedback-enquiry").slideDown(250);
        }
    });
    
    function removeActive() {
        $(".feedback-form input").removeClass("active");
        $(".feedback-form > div").slideUp(250);
    }
    
    /*==--------------====  Feedback Form AJAX ====------------------== */
    $('#form_email_1418413').attr('action','');
    
    $("#form_email_1418413").submit(function(e) {
        e.preventDefault();
        
        //process form here
        $('#q1418413_q2').val(window.location.href);
        
        var $form = $(this);
        var urlSend = "https://www.daf.qld.gov.au/design/esi/forms/feed-back"
        var getSubmit = $('.sq-form-submit').attr('name');
        var dataSend = $form.serialize() + '&' + getSubmit + '=Submit';
        // var response=grecaptcha.getResponse();
        var useful = document.getElementById('q1418413_q6_0');
        var not_useful = document.getElementById('q1418413_q6_1');
        var error_panel = $('.error-panel');
        var is_true = "";

        $('.so_spicey').each(function( i ) {
            if ( this.value ) {
                if ( this.value.length >= 0 ) {
                    $('.feedback-form').html('<p>Are you human?</p>');
                    is_true = "not_human";
                }
            }
        });
        
        $.ajax({
            type: "POST",
            url: urlSend,
            data: dataSend,
            beforeSend: function() { 
                $form.validate();
                
                if(is_true === "not_human") {
                    return false;
                }
                
                if((!useful.checked && !not_useful.checked)) {

                    if(!useful.checked && !not_useful.checked) {
                        var form_errors = '<div class="error-panel"><h2>Form error</h2><p class="sq-form-errors-message">There were errors submitting the form.&nbsp;&nbsp;Please correct the marked fields and try again.</p><ul class="sq-form-errors"><li>Question "This page was" - Please let us know if this page was useful or not useful</li></ul></div>';
                        $('.form-contents').prepend(form_errors);
                        console.log('not_checked');
                        return false;
                    } else {
                        error_panel.hide();
                    }
                    
                    return false;
                    
                } else {
                    error_panel.hide();
                    $("#form_email_1418413").trigger("reset");
                    $('.feedback-form').html('<span class="loading-spinner"><i class="fas fa-spinner fa-spin"></i></span> Submitting feedback...');
                }
            },
            success: function() {
              $('.feedback-form').html("<div id='message'></div>");
              $('#message').html("<h2>We appreciate your feedback!</h2>")
              .hide()
              .fadeIn(1000, function() {
                  $('#message').append("<p>Your feedback is important to us and will be used to improve our website.</p>");
              });
            }
        });
    });
    
//  openFeedbackForm();
});