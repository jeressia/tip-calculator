let billInput = document.getElementById('bill-input');
let numberOfPeopleInput = document.getElementById('people-count-input');
let fivePercentTip = document.getElementById('5');
let tenPercentTip = document.getElementById('10');
let fifteenPercentTip = document.getElementById('15');
let twentyfivePercentTip = document.getElementById('25');
let fiftyPercentTip = document.getElementById('50');
let customTip = document.getElementById('custom');


const intialBill = () => console.log(billInput.value);
const totalPeople = () => console.log(numberOfPeopleInput.value)
const customTipInput = () => console.log(customTip.value)
const tipPercentage = (tip) => console.log(tip)

billInput.addEventListener('input', intialBill);
numberOfPeopleInput.addEventListener('input', totalPeople);

customTip.addEventListener('input', customTipInput);
fivePercentTip.addEventListener('click', tipPercentage(fivePercentTip.value));
tenPercentTip.addEventListener('click', tipPercentage(0.10));
fifteenPercentTip.addEventListener('click', tipPercentage(0.15));
twentyfivePercentTip.addEventListener('click', tipPercentage(0.25));
fiftyPercentTip.addEventListener('click', tipPercentage(0.50));
