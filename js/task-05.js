const refs = {
    input: document.querySelector('#name-input'),
    title: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputTextChange);

function onInputTextChange(event) {
    refs.title.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        refs.title.textContent = 'незнакомец';
    }
}
