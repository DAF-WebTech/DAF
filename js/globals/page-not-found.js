/*==---------------------------------------------------------====
    Page not found - Search
====---------------------------------------------------------==*/
$( document ).ready(function() {    
    function getPageTitle() {
        var pageTitle, url;
        var query = "";

        url = window.location.href.split("/");
        if(url[url.length - 1].match(/[ !@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/)) {
            pageTitle = url[url.length - 2];
        } else {
            pageTitle = url[url.length - 1];
        }

        pageTitle = pageTitle.split("-");
        
        for(var i = 0; i < pageTitle.length; i ++) {
            if( (i >= 0) && (i < pageTitle.length -1) ) {
                query += (pageTitle[i] + " ");
            } else {
                query += (pageTitle[i]);
            }
        }
        $('.not-found-search').text(""+query+"");
        $('.not-found-search').attr('title', ""+query+"");
        return query;
    }
    getPageTitle();
    $('.not-found-search').click(function () {
        var query = getPageTitle();
        $('#query').val(""+query+"");
        $( "#global_search" ).submit();
    });
});
