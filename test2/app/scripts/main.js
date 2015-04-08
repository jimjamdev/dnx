$(".form").submit(function(){
    var isFormValid = true;
    $(".form .required textarea").each(function(){ // Note the :text
        if ($.trim($(this).val()).length == 0){
            $(this).parent().addClass("error");
            isFormValid = false;
        } else {
            $(this).parent().removeClass("error");
        }
    });
    if (!isFormValid) alert("Please fill in all the required fields (highlighted in red)");
    return isFormValid;
});