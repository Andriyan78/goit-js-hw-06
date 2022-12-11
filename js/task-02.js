const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const ingridientsList = ingredients.map((el) => 
  
{let item = document.createElement('li');
 item.classList.add('item');
  item.textContent = el;
  return item
});

list.append(...ingridientsList);
console.log(list)
