$(document).ready(function(){
    $("#myButton").click(function(){
        $.ajax({
            url: 'color.php',
            success: function(data) {
                $("#myParagraph").css("color",data);
            }
        });
    });
});
