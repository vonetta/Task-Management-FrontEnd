//check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); //stops bubbling up to other elements
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        console.log("you hit enter");
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li> ");
    };
})

$(".fa-pencil-square-o").on("click", function () {
    $("input[type='text']").fadeToggle();
})

