var materialIcons = [
    "account_balance", "assignment_ind", "assignment", "brightness_7", "brightness_5", "business_center", "contact_mail", "burst_mode"

];

$('.dropdown-trigger').dropdown();

$(document).ready(function(){
    $('.sidenav').sidenav();
    
});




(function($) {
    $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
        {               // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
        onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page

        }
    });
}(jQuery));


$(document).ready(function(){
    $('.StudiesCard').collapsible();
    $('.WorkCard').collapsible();
    $('.collapsible').collapsible();
  });


