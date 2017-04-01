/* global $ */

$(document).ready(function(){
    var webDevStr = "Are you looking for a simple landing page? Perhaps you’d like to get your portfolio of artwork pushed online? Maybe your " + 
    "business is growing and you would like to implement a full-blown web application that your clients, or your team, could utilize to further " +
    "your business goals. My skills encompass almost all modern web technologies today, including but not limited to: HTML5, CSS3, " + 
    "Javascript/jQuery, Express.js and Node.js, MongoDB, and more.";
    var maintenanceStr = "Is your site online, but it’s still living in the ‘90s? Is your site modern, responsive, and interactive, or is it " + 
    "static and boring? If you are needing a website or web app updated to the modern era then don’t hesitate to reach out to me. I can work " + 
    "with you, figure out what you want your website/app to accomplish, and we can give it life again.";
    var managementStr = "I can build your modern website, I can maintain it, and then I can help you further your success by keeping you hard " + 
    "at work at what is most important with your business by managing your online presence for you. If you have more important things to worry " + 
    "about (marketing, advertising, sales, or promoting you and/or your business) and would rather not handle all the extra dirt that comes " + 
    "with managing a website - that’s choosing a web host that is right for you and your site, working in tandem with the web hoster and their " + 
    "technologies, and handling all communication between any and all third-parties for the site - then please contact me now";
    
    // jQuery/animations for WebDev service thumbnail
    $(".dev-thumb").hover(function(){
        $("#dev-label").animate({opacity: 1}, 500);
    }, function(){
        $("#dev-label").animate({opacity: 0}, 200);
    });
    
    $(".dev-thumb").on("click", function(){
        $("#dev-label").animate({opacity: 1}, 500);
        $("#dev-hr").animate({opacity: 1}, 500);
        $("#man-hr").animate({opacity: 0}, 500);
        $("#maint-hr").animate({opacity: 0}, 500);
        
        if($(".services-p").text() === maintenanceStr || managementStr){
            $(".services-p").text("");
        }
        
        if($(".services-p").text() === ""){
            $(".services-p").append(webDevStr).animate({opacity: 1}, 500);
        }
    });
    
    // jQuery/animations for Maintenance service thumbnail
    $(".maint-thumb").hover(function(){
        $("#maint-label").animate({opacity: 1}, 500);
    }, function(){
        $("#maint-label").animate({opacity: 0}, 200);
    });
    
    $(".maint-thumb").on("click", function(){
        $("#maint-label").animate({opacity: 1}, 500);
        $("#maint-hr").animate({opacity: 1}, 500);
        $("#dev-hr").animate({opacity: 0}, 500);
        $("#man-hr").animate({opacity: 0}, 500);
        
        if($(".services-p").text() === webDevStr || managementStr){
            $(".services-p").text("");
        }
        
        if($(".services-p").text() === ""){
            $(".services-p").append(maintenanceStr).animate({opacity: 1}, 500);
        }
    });
    
    // jQuery/animations for Management service thumbnail
    $(".man-thumb").hover(function(){
        $("#man-label").animate({opacity: 1}, 500);
    }, function(){
        $("#man-label").animate({opacity: 0}, 200);
    });
    
    $(".man-thumb").on("click", function(){
        $("#man-label").animate({opacity: 1}, 500);
        $("#man-hr").animate({opacity: 1}, 500);
        $("#maint-hr").animate({opacity: 0}, 500);
        $("#dev-hr").animate({opacity: 0}, 500);
        
        if($(".services-p").text() === webDevStr || maintenanceStr){
            $(".services-p").text("");
        }
        
        if($(".services-p").text() === ""){
            $(".services-p").append(managementStr).animate({opacity: 1}, 500);
        }
    });
});