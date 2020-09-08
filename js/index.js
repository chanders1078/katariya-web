$(document).ready(function() {
    $(".btn-box,.btn-one").click(function() {
        $(".book-apt-form-container").css("display", "block");
    });
    $(".close-btn").click(function() {
        $(".book-apt-form-container").css("display", "none");
    });
});

