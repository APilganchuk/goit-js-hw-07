const refs = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputRange.addEventListener('input', onInputChangeTextSize);

function onInputChangeTextSize(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px';
    
}
