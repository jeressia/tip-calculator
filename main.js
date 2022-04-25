const billInput = document.getElementById('bill-input');
const numberOfPeopleInput = document.getElementById('people-count-input');
const fivePercentTip = document.getElementById('5');
const tenPercentTip = document.getElementById('10');
const fifteenPercentTip = document.getElementById('15');
const twentyfivePercentTip = document.getElementById('25');
const fiftyPercentTip = document.getElementById('50');
const customTip = document.getElementById('custom');
const resetBtn = document.getElementById('reset-btn');

const intialBill = billInput.value;
const userInput = () => console.log(billInput.value);
const totalPeople = () => console.log(numberOfPeopleInput.value)
const customTipInput = () => console.log(customTip.value)
const tipPercentage = (tip) => {
    const tipAsNumber = Number(tip);
    console.log(intialBill, 'initial number')
    console.log(tipAsNumber, 'tip')
    console.log(intialBill * tipAsNumber);
}

const eventListeners = () => {
billInput.addEventListener('input', userInput);
numberOfPeopleInput.addEventListener('input', totalPeople);
customTip.addEventListener('input', customTipInput);
}

const selectedTip = (tipSelected) => {
    if (!tipSelected.classList.contains('active')) {
        tipSelected.classList.add('active')
    } else if (tipSelected.classList.contains('active')) {
        tipSelected.classList.remove('active')
    }
}

const resetFields = () => {
    billInput.value = 0;
    numberOfPeopleInput.value = 0;
    customTip.value = 0;
}

const init = () => {
    eventListeners();
}

init();