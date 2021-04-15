const refs = {
    container: document.querySelector('#controls'),
    input: document.querySelector('[type=number]'),
    btnRender: document.querySelector('[data-action=render]'),
    btnDestroy: document.querySelector('[data-action=destroy]'),
    boxesThumb: document.querySelector('#boxes'),
};

refs.btnRender.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = refs.input.value;

    for (let i = 0; i < amount; i++) {
        const newBox = document.createElement('div');
        const basicSize = 30;
        const newSize = basicSize + i * 10;
        newBox.style.width = `${newSize}px`;
        newBox.style.height = `${newSize}px`;
        newBox.style.margin = `10px`;
        newBox.style.backgroundColor = `${randomRgb()}`;
        refs.boxesThumb.append(newBox);
    }
}
function destroyBoxes() {
    refs.input.value = '';
    refs.boxesThumb.innerHTML = '';
    refs.input.value = '0';
}
const randomRgb = () => {
    const rgbNum = () => Math.floor(Math.random() * 256);
    const r = rgbNum();
    const g = rgbNum();
    const b = rgbNum();
    return `rgb(${r},${g},${b})`;
};
