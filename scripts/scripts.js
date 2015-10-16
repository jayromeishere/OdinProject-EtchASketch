var d = prompt("How many squares wide should the grid be?");

/*
$(document).ready(function () {
    $("#container").height(d * 10 + 2 * d);
    $("#container").width(d * 10 + 2 * d);
});

for (var i = 1; i < (d * d) + 1; i++) {
    $(document).ready(function() {
        $("#container").append('<div class="gridUnit"></div>');
    });
};


$(document).ready(function () {
    $(".gridUnit").hover(function () {
        $(this).css("background-color", "red");
    });
});
*/

var randomGen = function () {
    var randomColor = "rgb(" + 
    (Math.floor(Math.random() * 255)) + "," +
    (Math.floor(Math.random() * 255)) + "," +
    (Math.floor(Math.random() * 255)) + ")";
    return randomColor;
}

$(document).ready(function () {
    $("#container").height(d * 10 + 2 * d);
    $("#container").width(d * 10 + 2 * d);
    for (var i = 1; i < (d * d) + 1; i++) {
        $("#container").append('<div class="gridUnit"></div>');
    };
    $(".gridUnit").hover(
        function () {
            $(this).css("background-color", randomGen());
        }, function () {
            $(this).css("background-color", randomGen());
        }
    );
});

