const listEL = document.querySelectorAll('.item');
console.log(`В списке ${listEL.length} категории.`);

const listItemsQuantity = listEL.forEach(item => {
    console.log(`Категория : ${item.firstElementChild.textContent}`);
    console.log(`Количество елементов : ${item.querySelectorAll('li').length}`);
});

