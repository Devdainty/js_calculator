// program for a simple calculator without html
let conclusion;

// operator input
const operator = prompt('Enter operator ( either /, *, - or + ): ');

// operand input and convert it to number
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        conclusion = num1 + num2;
        alert(`${num1} + ${num2} = ${conclusion}`);
        break;

    case '-':
        conclusion = num1 - num2;
        alert(`${num1} - ${num2} = ${conclusion}`);
        break;

    case '*':
         conclusion = num1 * num2;
        alert(`${num1} * ${num2} = ${conclusion}`);
        break;

    case '/':
        conclusion = num1 / num2;
        alert(`${num1} / ${num2} = ${conclusion}`);
        break;

    default:
        alert('Invalid operator');
        break;
}