window.addEventListener('load', function (e){
    $('.accordions-wrapper').each(function(e){
        var $accContainer = $(this);
        if($accContainer.attr('data-acc-loaded') === 'not-loaded') {
            $accContainer.attr('data-acc-loaded', 'loaded');
            var $accTitles = $accContainer.find('.accordions-title');
            $accTitles.each(function(e){
                var $title = $(this);
                $title.click(function(e){
                    if($accContainer.data('accordion-type') === 'single') {
                        $accContainer.find('.accordions-content').not($title.next()).slideUp('fast');
                        $title.next().slideToggle('fast');
                        $accContainer.find('.accordion').not($title.parent()).removeClass('active')
                    } else {
                        $title.next().slideToggle('fast');
                    }
                    $title.parent().toggleClass('active');
                    $title.parent().toggleClass('opened');
                    return false;
                });
            });
        }
    });
});

$(document).ready(function(){
    var $accContainer = $(".accordion");
    var $accTitle = $(".accordion .accordion-title");

    $accTitle.click(function(e) {
        
        var $accCurrent = $(this);
        
        // Check the accordion type. If type equals Single, contract accordion when another tab is clicked 
        if ($accContainer.data('accordion-type') === 'single') {
            
            if ($accTitle.not($accCurrent)) {
                $accTitle.not($accCurrent).removeClass('active');
                $accTitle.not($accCurrent).find('.expand').html('<i class="fas fa-chevron-down"></i>');
                $accTitle.not($accCurrent).next("div").slideUp(150);
            }
            
        }

        if ($accCurrent.hasClass("active")) {
            // Contract accordion and swap hide/show text and icon
            $accCurrent.removeClass("active");
            $accCurrent.find('.expand').html('<i class="fas fa-chevron-down"></i>');
            $accCurrent.next("div").slideUp(150)
        } 
        else {
            // Expand accordion and swap hide/show text and icon
            $accCurrent.addClass("active");
            $accCurrent.find('.expand').html('<i class="fas fa-chevron-up"></i>');
            $accCurrent.next("div").slideDown(150);
        }
    });
});