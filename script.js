// burger menu

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    navMenu.classList.remove('active')
}))


// product array

const products = [
    {
        name: 'Cannoli',
        price: '25 kr',
        rating: '3.7',
        category: '',
        amount: 0,
    },

    {
        name: 'Carrot Cake',
        price: '40 kr',
        rating: '4.9',
        category: '',
        amount: 0,
    },

    {
        name: 'Cheesecake',
        price: '40 kr',
        rating: '4.3',
        category: '',
        amount: 0,
    },

    {
        name: 'Chocolate Chip Cookie',
        price: '30 kr',
        rating: '4.5',
        category: '',
        amount: 0,
    },

    {
        name: 'Chocolate Glazed Brownie',
        price: '40 kr',
        rating: '4.8',
        category: '',
        amount: 0,
    },

    {
        name: 'Churros',
        price: '45 kr',
        rating: '5.0',
        category: '',
        amount: 0,
    },
    
    {
        name: 'Cinnamon Roll',
        price: '35 kr',
        rating: '4.9',
        category: '',
        amount: 0,
    },

    {
        name: 'Crêpes',
        price: '45 kr',
        rating: '4.5',
        category: '',
        amount: 0,
    },

    {
        name: 'Croissant',
        price: '30 kr',
        rating: '4.0',
        category: '',
        amount: 0,
    },

    {
        name: 'Cupcake',
        price: '35 kr',
        rating: '3.9',
        category: '',
        amount: 0,
    },

];


// increase & decrease buttons

const container = document.querySelector('#products');

for (let i = 0; i < products.length; i++) {
    container.innerHTML += 
    `<div id="donut-${i}">
    <button class="decrease" id="decrease-${i}">-</button>
    <strong>${products[i].name}</strong>
    Amount: ${products[i].amount}
    Price: ${products[i].price}:-
    <button class="increase" id="increase-${i}">+</button>
    </div>`;
}

const increaseButtons = Array.from(document.querySelectorAll('.increase'));
for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener('click', increaseAmount);
}

function increaseAmount(e) {
    // console.log('increase', e.target.id.replace('increase-', ''));
    const index = e.target.id.replace('increase-', '');
    // console.log(products[index]);

    products[index].amount += 1;

    container.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        container.innerHTML += 
        `<div id="donut-${i}">
        <button class="decrease" id="decrease-${i}">-</button>
        <strong>${products[i].name}</strong>
        Amount: ${products[i].amount}
        Price: ${products[i].price}:-
        <button class="increase" id="increase-${i}">+</button>
        </div>`;
    }

    const increaseButtons = Array.from(document.querySelectorAll('.increase'));
    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', increaseAmount);
    }
}