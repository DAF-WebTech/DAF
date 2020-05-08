/*==--------------------------------------------------====
   Add Reason/Heading Below
   
   General | Main - Navigation | Landing page JS |
====--------------------------------------------------==*/

$(document).ready(function() {
    
    /*==------------==== Landing Page List====-----------------==*/
        // Landing Page - Add the expand icon for menu items with children.
        $("ul.landing-list").find('li').has('ul').addClass('expandable').prepend('<i class="expand"><span></span></i>');
    
        //Limit the sub listing li to 6 and add more topics link
        $('ul.landing-list li ul.sub-landing-list').each(function(e) {
            $("li:gt(5)", this).hide();
            
            var theLink = $(this).closest('.expandable').find('a').attr('href');
            
        	if ($("li", this).length > 6) {
               $(this).after("<p class='more-link'><a class='more-link' href='" + theLink + "'>More topics</a></p>");
            }
        }); 
    
        //Hide the more topics link so it can toggle when on responsive click
       // $('ul.landing-list p.more-link').css('display','none');
        
        // Landing page - Add the children toggle functionality.
        $("ul.landing-list li.landing-list-item.expandable").find('i.expand').click(function() {   
                         
            // The 'open' class is for the child icon.
              $(this).toggleClass('open');            
            //$(this).siblings('ul.sub-landing-list').slideToggle('1000');
            //console.log($(this));
            //$(this).siblings().toggle('1000');
            $(this).siblings('ul.sub-landing-list').slideToggle('1000');
            $(this).siblings('ul.landing-list p.more-link').slideToggle('1000');
           
        });
        
        // Main- Navigation Megamenu to show after 3secs, if themouse in still on the li element.
        var timeoutId;
        
        $("ul.list li.item").hover(function(evt) {
            var enter = evt.currentTarget;
            if (!timeoutId) {
                timeoutId = window.setTimeout(function() {
                    timeoutId = null;
                    $(enter).find('ul').addClass('open');
               }, 400);
            }
        },
        function (evt) {
            var enter = evt.currentTarget;
            if (timeoutId) {
                window.clearTimeout(timeoutId);
                timeoutId = null;
            }
            else {
              // $('ul.list li.item ul.sublist').removeClass('open');
               setTimeout(function(){	
               $(enter).find('ul').removeClass('open');
            },400);
            }
        });
});




