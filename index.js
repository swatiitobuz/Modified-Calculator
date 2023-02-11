function clearScreen() {
    document.getElementById("result").value = '';
}

function display(value) {
    document.getElementById("result").value += value;
}

function back(){
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1);
}
function calculate(){
    let input = document.getElementById("result").value;
    let answer = evaluate(input);
    document.getElementById("result").value = answer;
}
function evaluate(expression){
    if(expression.length == 0){
        return 0;
    }
    let equation = expression.split('');
    let values = []
    let operators = []

    for(let i = 0;i < equation.length;i++){
        if(equation[i] >='0' && equation[i] <= '9'){
            let num = ''
            while(i < equation.length && equation[i] >= '0' && equation[i] <= '9'){
                num = num + equation[i++];
            }
            values.push(parseInt(num,10));
                i--;
        }
        else if(equation[i] == '('){
            operators.push(equation[i]);
        }
        else if(equation[i] == ')'){
            while(operators[operators.length - 1] != '('){
                values.push(innerCalculation(operators.pop(),values.pop(),values.pop()));
            }
            operators.pop();
        }
        else if(equation[i] == '+' || equation[i] == '-'|| equation[i] == '*' || equation[i] == '/'){
            while(operators.length > 0 && nonConsecutiveOperations(equation[i],operators[operators.length-1])){
                values.push(innerCalculation(operators.pop(),values.pop(),values.pop()));
            }
            operators.push(equation[i]);
        }
    }
    while(operators.length > 0){
        values.push(innerCalculation(operators.pop(),values.pop(),values.pop()));
    }
    return values.pop();
}

function nonConsecutiveOperations(operator1,operator2){
    if(operator2 == '(' || operator2 == ')'){
        return false;
    }
    if((operator1 == '*' || operator1 == '/') && (operator2 == '+' || operator2 == '-')){
        return false;
    }
    else{
        return true;
    }

}

function innerCalculation(operator,b,a){
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if(b == 0){
                return "not valid";
            }
            else{
                return parseInt(a/b,10);
            }
    }
    return 0;

}
function square() {
    let input = document.getElementById('result').value;
    let x = squareFunction(input);
    document.getElementById('result').value = x;

    function squareFunction(value){
        let digit = parseInt(value,10);
        let squareValue = digit*digit;
        let strSquareValue = squareValue.toString();
        return strSquareValue;
    
    }
}

function factorial() {
    let input = document.getElementById('result').value;
    let y = parseInt(input,10);
    let x = factorialFunction(y);
    let z = x.toString()
    document.getElementById('result').value = z;

    function factorialFunction(digit) {
        if(digit == 0){
            return 1;
        }
        return digit * factorialFunction(digit - 1);
    }
}

function percentage(){
    let input = document.getElementById('result').value;
    let y = parseInt(input,10);
    let x = percentageFunction(y);
    let z = x.toString()
    document.getElementById('result').value = z;

    function percentageFunction(digit){
        let result = digit/100;
        return result;
    }
}

function squareRoot(){
    let input = document.getElementById('result').value;
    let y = parseInt(input,10);
    let x = squareRootFunction(y);
    let z = x.toString()
    document.getElementById('result').value = z;

    function squareRootFunction(digit) {
        let result = Math.sqrt(digit);
        return result;
    }
    
}