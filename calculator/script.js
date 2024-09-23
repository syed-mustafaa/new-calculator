let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let lastChar = string[string.length - 1];
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // Check if last character is an operator
            if (!isOperator(lastChar) || !isOperator(e.target.innerHTML)) {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
    })
});

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

