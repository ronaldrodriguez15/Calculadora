$(document).ready(function(){
    
    let BtnOn = $('#btn-on');
    let DisplayCalc = $('#displayCalc');

    // BTN NUMBERS
    let BtnOne = $('#btn-one');
    let BtnTwo = $('#btn-two');
    let BtnThree = $('#btn-three');
    let BtnFour = $('#btn-four');
    let BtnFive = $('#btn-five');
    let BtnSix = $('#btn-six');
    let BtnSeven = $('#btn-seven');
    let BtnEight = $('#btn-eight');
    let BtnNine = $('#btn-nine');
    let BtnZero = $('#btn-zero');
    let BtnThreeZero = $('#btn-three-zero');

    // BTN FUNCTIONS AND OPERATIONS
    let BtnAC = $("#btn-ac");
    let BtnC = $("#btn-c");
    let BtnPorc = $("#btn-porc");
    let BtnRadic = $("#btn-radic");
    let BtnMult = $("#btn-mult");
    let BtnDivide = $("#btn-divide");
    let BtnAdd = $("#btn-add");
    let BtnSubtr = $("#btn-subtr");
    let BtnPoint = $("#btn-point");
    let BtnPi = $("#btn-pi");
    let BtnResult = $("#btn-result");

    
    DisplayCalc.prop('readonly', true);
    $('.fdmtal').prop('disabled', true);

    BtnOn.click(function(){

        if (DisplayCalc.hasClass("off-calc")) {
            DisplayCalc.removeClass("off-calc")
                       .addClass("on-calc")
                       .attr('placeholder', '0');
            
            $('.fdmtal').prop('disabled', false);

        } else if (DisplayCalc.hasClass("on-calc")) {
            DisplayCalc.removeClass("on-calc")
                       .addClass("off-calc")
                       .attr('placeholder', '')
                       .val('');
            
            $('.fdmtal').prop('disabled', true);
                         
        } 
    });

    BtnOne.click(function(){

        let text = DisplayCalc.val()+" 1";
        DisplayCalc.val(text);
        
    });
    BtnTwo.click(function(){

        let text = DisplayCalc.val()+" 2";
        DisplayCalc.val(text);

    });
    BtnThree.click(function(){

        let text = DisplayCalc.val()+" 3";
        DisplayCalc.val(text);

    });
    BtnFour.click(function(){

        let text = DisplayCalc.val()+" 4";
        DisplayCalc.val(text);

    });
    BtnFive.click(function(){

        let text = DisplayCalc.val()+" 5";
        DisplayCalc.val(text);

    });
    BtnSix.click(function(){

        let text = DisplayCalc.val()+" 6";
        DisplayCalc.val(text);

    });
    BtnSeven.click(function(){

        let text = DisplayCalc.val()+" 7";
        DisplayCalc.val(text);

    });
    BtnEight.click(function(){

        let text = DisplayCalc.val()+" 8";
        DisplayCalc.val(text);

    });
    BtnNine.click(function(){

        let text = DisplayCalc.val()+" 9";
        DisplayCalc.val(text);
        
    });
    BtnZero.click(function(){

        let text = DisplayCalc.val()+" 0";
        if (DisplayCalc.val() == '' || DisplayCalc.val() == '0') {
            DisplayCalc.val('');
        } else {
            DisplayCalc.val(text);
        }
        
    });
    BtnThreeZero.click(function(){

        let text = DisplayCalc.val()+" 0 0 0";
        if (DisplayCalc.val() == '' || DisplayCalc.val() == '0') {
            DisplayCalc.val('');
        } else {
            DisplayCalc.val(text);
        }
        
    });
    BtnAC.click(function(){
        DisplayCalc.val('');
    });
    BtnC.click(function(){
        let text = DisplayCalc.val();
        let CText = text.slice(0, -2);
        DisplayCalc.val(CText);
    });
    BtnPorc.click(function(){

        let text = DisplayCalc.val()+" %";
        DisplayCalc.val(text);
        
    });
    BtnRadic.click(function(){

        let text = DisplayCalc.val()+" "+decodeEntity('&radic;');
        DisplayCalc.val(text);
        
    });
    BtnMult.click(function(){

        let text = DisplayCalc.val()+" x";
        DisplayCalc.val(text);
        
    });
    BtnDivide.click(function(){

        let text = DisplayCalc.val()+" "+decodeEntity('&divide;');
        DisplayCalc.val(text);
        
    });
    BtnAdd.click(function(){

        let text = DisplayCalc.val()+" +";
        DisplayCalc.val(text);
        
    });
    BtnSubtr.click(function(){

        let text = DisplayCalc.val()+" -";
        DisplayCalc.val(text);
        
    });
    BtnPoint.click(function(){

        let text = DisplayCalc.val()+" .";
        DisplayCalc.val(text);
        
    });
    BtnPi.click(function(){

        let text = DisplayCalc.val()+" 3 . 1 4";
        DisplayCalc.val(text);
        
    });
    BtnResult.click(function(){

        console.log(DisplayCalc.val());

        if (DisplayCalc.val() == '' || DisplayCalc.val() == '0') {
            // 
        } else {
            DisplayCalc.val('Por programar :(');
        }
        
    });

});

function decodeEntity(inputStr) {
    let textarea = document.createElement("textarea");
    textarea.innerHTML = inputStr;

    return textarea.value;
}