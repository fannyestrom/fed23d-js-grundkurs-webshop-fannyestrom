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
    },

    {
        name: 'Carrot Cake',
        price: '40 kr',
        rating: '4.9',
        category: '',
    },

    {
        name: 'Cheesecake',
        price: '40 kr',
        rating: '4.3',
        category: '',
    },

    {
        name: 'Chocolate Chip Cookie',
        price: '30 kr',
        rating: '4.5',
        category: '',
    },

    {
        name: 'Chocolate Glazed Brownie',
        price: '40 kr',
        rating: '4.8',
        category: '',
    },

    {
        name: 'Churros',
        price: '45 kr',
        rating: '5.0',
        category: '',
    },
    
    {
        name: 'Cinnamon Roll',
        price: '35 kr',
        rating: '4.9',
        category: '',
    },

    {
        name: 'Crêpes',
        price: '45 kr',
        rating: '4.5',
        category: '',
    },

    {
        name: 'Croissant',
        price: '30 kr',
        rating: '4.0',
        category: '',
    },

    {
        name: 'Cupcake',
        price: '35 kr',
        rating: '3.9',
        category: '',
    },

];

const container = document.querySelector('#products');

for (let i = 0; i < 10; i++) {
    console.log(i);
    container.innerHTML += `<div>${products[i].name}</div>`;
}
