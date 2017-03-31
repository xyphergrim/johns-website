/* global $ */

$(document).ready(function(){
    $("#dev-thumb").hover(function(){
        $("#dev-label").animate({opacity: 1}, 500);
    }, function(){
        $("#dev-label").animate({opacity: 0}, 200);
    });
    
    $("#maint-thumb").hover(function(){
        $("#maint-label").animate({opacity: 1}, 500);
    }, function(){
        $("#maint-label").animate({opacity: 0}, 200);
    });
    
    $("#man-thumb").hover(function(){
        $("#man-label").animate({opacity: 1}, 500);
    }, function(){
        $("#man-label").animate({opacity: 0}, 200);
    });
});