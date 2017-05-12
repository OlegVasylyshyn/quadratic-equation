function print(str){
    document.write(str + '<br>');
}

function getNumber(message){
    while(true){
        var number = Number(prompt(message));
        if(!number || isNaN(number)) {
            message = 'ONLY NUMBERS !!!';
            continue;
        }
        return number;
    }
}

function quadraticEquation(a, b, c){
    var d = b * b - 4 * a * c;
    print('discr : ' + d);
    
    if(d > 0){
        var n1 = Math.sqrt(d);
        var n2 = -b + n1;
        var x1 = n2 / (2*a);
    
        n2 = -b - n1;
        var x2 = n2 / (2*a);
    
        return { x1: x1, x2: x2};
    } else if(d === 0){
        // in this case we have one result
        return - (b / (2 * a));
    } else {
        n1 = Math.sqrt(Math.abs(-(b * b) + 4 * a * c));
        x1 = (-b + n1) / 2*a;
        x2 = (-b - n1) / 2*a;
        return { x1: x1, x2: x2};
    }
    
    
}

var a = getNumber('Enter first namber');
var b = getNumber('Enter second namber');
var c = getNumber('Enter third namber');

var x = quadraticEquation(a, b, c);

print('Result : ' + JSON.stringify(x));