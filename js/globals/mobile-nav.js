/*==--------------------------------------------------====
    Mobile Nav Transitional Icons - Sub Nav '+' Icon Functionality
====--------------------------------------------------==*/
document.addEventListener("DOMContentLoaded", function(){
    
    var mobile_nav_icon = $("a.icon-menu-toggle"),  
    	nav = $(".main__navigation ul.list"), 
    	mobile_search_icon = $("a.icon-search-toggle"), 
    	mobile_search = $(".header__search__site-search--global"),
    	main_content= $("#content");
        
    mobile_search_icon.click(function(evt) {
    	evt.preventDefault();
    	
        if(mobile_search_icon.hasClass("active")) {
    		mobile_search_icon.removeClass("active");
    		mobile_search.slideUp(250);
    		main_content.animate({marginTop: '0'}, 250);

    	} else {
    		mobile_search_icon.addClass("active");
    		mobile_search.slideDown(250);
    		main_content.animate({marginTop: '4.5rem'}, 250);

    	}
    	if (mobile_nav_icon.hasClass("active")) {
    		mobile_nav_icon.removeClass("active");
    		nav.slideUp(250);
    		
    	}
    });
    
    mobile_nav_icon.click(function(evt) {
        evt.preventDefault();
    
    	if (mobile_nav_icon.hasClass("active")) {
    		mobile_nav_icon.removeClass("active");
    		nav.slideUp(250);
    		
    	} else {
    		mobile_nav_icon.addClass("active");
    		nav.slideDown(250);
    		
    	}
    	if(mobile_search_icon.hasClass("active")) {
    		mobile_search_icon.removeClass("active");
    		mobile_search.slideUp(250);
    		main_content.animate({marginTop: '0'}, 250);
    		
    	} 
    });
    
    
    // Add the expand icon for menu items with children.
    nav.find('li').has('ul').addClass('expandable').prepend('<i class="expand"><span></span></i>');
    
    // Add the children toggle functionality.
    nav.find('i.expand').click(function() {
    
        // The 'open' class is for the child icon.
        $(this).toggleClass('open');
        $(this).siblings('ul.sublist').slideToggle('1000');
    });
    
});
