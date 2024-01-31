/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2; 

}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
 
    add(addNumber1, addNumber2) 
 
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
 
 }

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

let firstsub = function subtract(number1, number2) {
    return number1 - number2;
}

let secondsub = function subtractNumbers(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);

    firstsub(subNumber1,subNumber2); 

    document.querySelector('#difference').value = firstsub(subNumber1,subNumber2);

}

document.querySelector('#subtractNumbers').addEventListener('click', secondsub);



/* Arrow Function - Multiply Numbers */

let firstmul = (number1, number2) => number1 * number2;


let secondmul = () => {
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);
    
    firstmul(mulNumber1, mulNumber2); 

    document.querySelector('#product').value = firstmul(mulNumber1, mulNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', secondmul);


/* Open Function Use - Divide Numbers */

let firstdiv = (number1, number2) => number1 / number2;


let seconddiv = () => {
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);
    
    firstdiv(divNumber1, divNumber2); 

    document.querySelector('#quotient').value = firstdiv(divNumber1, divNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', seconddiv);


/* Decision Structure */

/* let total = () => {
    let subVariable = Number(document.querySelector('#subtotal').value);

    if (document.getElementById("member").checked) {
        subVariable = subVariable - subVariable * 0.2;
    }
    else {
        subVariable = subVariable;
    }

    document.getElementById("total").textContent = subVariable.toFixed(2);

} */

document.querySelector('#getTotal').addEventListener('click',  () => {
    let subVariable = Number(document.querySelector('#subtotal').value);

    if (document.getElementById("member").checked) {
        subVariable = subVariable - subVariable * 0.2;
    }
    else {
        subVariable = subVariable;
    }

    document.getElementById("total").textContent = `$${subVariable.toFixed(2)}`;

}
 );



/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 

/* Output Source Array */

document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */

const odds = numbersArray.filter((number) => number % 2 !== 0);

document.querySelector('#odds').innerHTML = odds

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((x, y) => x + y);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map((x) => x * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map((x) => x * 2).reduce((x, y) => x + y);

