var clicked = function(){
    //if clicked, get 'beginTranslating' value
    //copy that value to 'wordcopy' textbox
    //work translate function and return to "translated" textbox
    var input = document.getElementById('input').value;
    document.getElementById('left').value = input;
    if(input.length > 1){
        var firstChar = input.charAt(0);
        input = input.slice(1);
        document.getElementById('right').value = input + firstChar + "ay";
        console.log(input);
    };
};

var cleared = function(){
    document.location.reload();
};