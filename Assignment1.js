function numChecker(){
        var num1 = parseInt(document.getElementById('input1').value);
        var num2 = parseInt(document.getElementById('input2').value);
        var num3 = num1+num2;
        if(num1 == 100 || num2 == 100 || num3 == 100){         
            document.getElementById('question1').innerHTML = true;
        }else{
            document.getElementById('question1').innerHTML = false;
        }
}

function spellBee(){
        var str1 = document.getElementById('string1').value;
        var str2 = document.getElementById('string2').value;
        if(str1.length <= 3 || str2.length <= 3){
            document.getElementById('question2').innerHTML = str1+str2;
        }else{
            document.getElementById('question2').innerHTML = str1.slice(0,3) + str2.substring(str2.length - 3);
        }
        
}

function extraction(){
    var str1 = document.getElementById('extract').value;
    var validation = str1.length;
    if(validation % 2 == 0){
        document.getElementById('question3').innerHTML = str1.slice(0,validation/2);
    }else{
        document.getElementById('question3').innerHTML = "String length must be even. Entered string length is " + validation;
    }
    
}

function concatination(){
    var str1 = document.getElementById('concatenate').value;
    var str2 = document.getElementById('concatenate2').value;
    document.getElementById('question4').innerHTML = str1.slice(1)+str2.slice(1);
    
}