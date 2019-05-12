$(document).ready(function () {
    
    $("a[rel='zoom']").click(function (event) {
        event.preventDefault();
        $(".lightbox").html("<img src="+$(this).attr("href")+">");
        $(".voile").fadeIn("voileopen");
        $(".lightbox").fadeIn("lightboxopen");
        
    })
    
    $(".voile").click(function() {
        $(".lightbox").fadeOut("lightboxopen");
        $(".voile").fadeOut("lightboxopen");
    })
 
});