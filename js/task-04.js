const decrementBtnRef = document.querySelector('[data-action=decrement]');
const incrementBtnRef = document.querySelector('[data-action=increment]');
const valueRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', onClickDecrement);
incrementBtnRef.addEventListener('click', onClickIncrement);

let counterValue = Number(valueRef.textContent);

function onClickIncrement() {
    counterValue = valueRef.textContent = counterValue + 1;
}

function onClickDecrement() {
    counterValue = valueRef.textContent = counterValue - 1;
}
