// this is for the sticky popup banner
// goes with the content container template Popup Banner [1462500], see its paint layout → type formats → default format [1462513]
// and goes with sticky-popup-banner.css [1462607]
 
var loadStickyPopup = function() {
    if (window.popupBannerTimeDelay && window.popupBannerMessage) { // these are defined in paint layout of content container template
        var timeDelay = parseInt(popupBannerTimeDelay);
    
        if (!isNaN(timeDelay) && timeDelay >= 0) {
        	window.setTimeout(function() {
        				
    			var stickyDiv = document.createElement("div");
    			stickyDiv.classList.add("popup-sticky-banner");
    			stickyDiv.innerHTML = popupBannerMessage + "<i class='close-popup-sticky-banner fa fa-times'></i>";
    			stickyDiv.firstChild.style.display = "inline-block"; // 
    	
    			body.insertAdjacentElement("afterbegin", stickyDiv);
    
    			// animate the appearance of the sticky div
    		    jQuery(stickyDiv).slideDown(1500);
    			
    			document.querySelector(".close-popup-sticky-banner").addEventListener("click", function() {
    				stickyDiv.style.display = "none"; // don't want to see it any more
    				localStorage.setItem("popupStickyBannerClose", new Date().toISOString());
    			});
        				
        	}, timeDelay * 1000);
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var psbc = "";
    try {
        psbc = localStorage.getItem("popupStickyBannerClose");
    } catch(err) {
        console.log("error, no local storage", err);
    }
    
    if (psbc) {
        var closeTime = new Date(localStorage.getItem("popupStickyBannerClose"));
        var today = new Date();
        if (today - closeTime > 28 * 60 * 60 * 1000)
            loadStickyPopup();
    }
    else {
        loadStickyPopup();
    }
});