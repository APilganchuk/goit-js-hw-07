const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listEl = document.querySelector('#ingredients');

const makeIngredientsMarkup = ingredientArray => {
    return ingredientArray.map(ingredient => {
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;
        return itemEl;
    });
};

listEl.append(...makeIngredientsMarkup(ingredients));
