const buttons = [
    '0', "1", "2", "3", "4", "5", "6", '7','8', '9', '+', '-', '*', '/', '=','CLEAR', 'SQROOT'
];

// const buttons2 = [
//     {id: 'zero', value: '0'},
//     {id: 'one', value: '1'},
//     {id: 'two', value: '2'},
//     {id: 'three', value: '3'},
//     {id: 'four', value: '4'},
//     {id: 'five', value: '5'},
//     {id: 'six', value: '6'},
//     {id: 'seven', value: '7'},
//     {id: 'eight', value: '8'},
//     {id: 'nine', value: '9'},
//     {id: 'add', value: '+'},
//     {id: 'subtract', value: '-'},
//     {id: 'divide', value: '/'},
//     {id: 'multiply', value: '*'},
//     {id: 'equals', value: '='},
//     {id: 'squareroot', value: 'SQROOT'},
//     {id: 'clear', value: 'CLEAR'}
// ]

let chosenNums = "";

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
CONTAINER.classList.add('flexProps');
document.body.appendChild(CONTAINER);

const OUTPUT = document.createElement('h1');
OUTPUT.setAttribute('id', 'output');
OUTPUT.textContent = chosenNums;
CONTAINER.appendChild(OUTPUT);

//

const solve = () => {
    if(chosenNums.length > 0) {
        chosenNums = eval(chosenNums);
    };
    OUTPUT.textContent = chosenNums;
};

const clear = () => {
    chosenNums = '';
    console.log(`Numbers have been cleared. ${chosenNums}`) 
};

const backspace = () => {
    let array = chosenNums.split('');
    let lastValue = array.slice(0, -1);
    
    if (chosenNums.length >= 0) {
        chosenNums = lastValue.join('').toString();
    };
};

const squareroot = () => {
    if(chosenNums.length > 0) {
        chosenNums = Math.sqrt(eval(chosenNums));
    };
}

function runCalcSwitch(input) {
    switch(input) {
        case '=': 
            solve();
            break;
        case 'CLEAR': 
            clear();
            break;
        case 'SQROOT': 
            squareroot();
            break;
        case 'Enter':
            solve();
            break;
        case 'c':
            clear();
            break;
        case 's':
            squareroot();
            break;
        case 'Backspace': 
            backspace();    
            break;
        case 'Shift':
            break;
        default: 
            if (buttons.includes(input)) {
                chosenNums += input
                console.log(`Current Input: ${chosenNums}`)
            } else {
                alert('Not included.')
            }
    };
};

for (let i = 0; i < buttons.length; i++) {
    const BUTTON = document.createElement('button');
    BUTTON.setAttribute('id', buttons[i]);
    BUTTON.setAttribute('value', buttons[i]);
    BUTTON.classList.add('button');
    BUTTON.textContent = buttons[i];
    BUTTON.onclick = () => {
        runCalcSwitch(BUTTON.value);
        OUTPUT.textContent = chosenNums;
    };
    CONTAINER.appendChild(BUTTON);
};

document.addEventListener('keydown', (e) => {
    let value = e.key.toString();
    runCalcSwitch(value);
    OUTPUT.textContent = chosenNums;
});
