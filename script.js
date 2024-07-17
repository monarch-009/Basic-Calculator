const buttonElement = document.querySelectorAll('button');

const inputFieldElement = document.getElementById('result');

for (let i = 0; i < buttonElement.length; i++) {
    buttonElement[i].addEventListener('click', () => {
        const buttonValue = buttonElement[i].textContent;
        if (buttonValue === 'C') {
            clearResult();
        }else if (buttonValue === '=') {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldElement.value = '';
}

function calculateResult() {
    inputFieldElement.value = eval(inputFieldElement.value);
}

function appendValue(buttonValue) {
    inputFieldElement.value += buttonValue;
}



