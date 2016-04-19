
$(window).scroll(function() {

    // get how far we've scrolled from the top of our screen
    var drehdich;
    var offset = $(window).scrollTop();
    offset = offset * 0.2;

    if (offset <= 90) {
        drehdich = offset;
    }
    else {
        drehdich = 90;
    }

    // apply the offset as a css transform to our buttons
    $('.logo-back').css({
        'transform': 'rotate(' + drehdich + 'deg)'
    });

});

// toggleBar is now an element.
$(document).ready(function() {

    var toggleBar = function(element) {
        $(element).clone().appendTo("ul.gallery").addClass("item-max");

        $(".item-max").on("click", function(event) {
            $(".item-max").fadeOut("2000", function(){
                $(".item-max").remove();
            })
        });

    }
    // target parent and define on.click will execute the following function.
    $("ul.gallery li").on("click", function(event) {

        // neue variable anlegen für das elternelement
        var $parent = $(event.target).parent();

        // das kinder element mit der variable ausstatten
        toggleBar($parent);

    });
});

