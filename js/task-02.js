const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
});

listEl.append(...elements);
console.log(listEl);
