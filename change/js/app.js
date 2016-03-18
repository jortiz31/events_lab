console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());

});

$(document).ready(function() {
    $(".sum").val("0");
    $(".key").val("");

    function calc() {
        //function removes all newlines, spaces (including non-breaking spaces), and tabs from the beginning and end of the supplied string.
        //If these whitespace characters occur in the middle of the string, they are preserved.
        var $num1 = ($.trim($(".num1").val()) != "" && !isNaN($(".num1").val())) ? parseInt($(".num1").val()) : 0;
        console.log($num1);
        var $num2 = ($.trim($(".num2").val()) != "" && !isNaN($(".num2").val())) ? parseInt($(".num2").val()) : 0;
        console.log($num2);
        $(".sum").val($num1 + $num2);
    }
    $(".key").keyup(function() {
        calc();
    });
});
