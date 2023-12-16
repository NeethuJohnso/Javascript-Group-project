var images = ['images/Expense%20tracker1.jpg', 'images/Expense%20tracker2.jpg', 'images/book3.jpg'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    $('#image').attr('src', images[i]);
}

// Animate home page text on load
$(".main-content p").each(function (index) {
    $(this)
        .delay(index * 400)
        .animate(
            {
                opacity: 1,
                transform: "translateY(0)",
            },
            800
        );
});

// Accordion functionality
$(".accordion-header").click(function () {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle();
    $(".accordion-content").not($(this).next(".accordion-content")).slideUp();
    $(".accordion-header").not($(this)).removeClass("active");
});

// Corrected carousel functionality
$('#left_button').click(prev);
$('#right_button').click(next);

// Initial image load
setImg();
