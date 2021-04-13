const inputRef = document.querySelector('#validation-input');
const dataAttrRef = inputRef.dataset.length;

inputRef.addEventListener('blur', onInputFocus);

function onInputFocus(event) {
    const inputValue = event.currentTarget.value;

    if (inputValue.length === Number(dataAttrRef)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}
