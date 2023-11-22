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
        price: 25,
        rating: '3.7',
        category: '',
        amount: 0,
        img: {
            src: 'images/cannoli.png',
            width: 100,
            height: 100,
            alt: 'Cannoli'
        }
    },

    {
        name: 'Caramel Cheesecake',
        price: 40,
        rating: '4.3',
        category: '',
        amount: 0,
        img: {
            src: 'images/caramel cheesecake.png',
            width: 100,
            height: 100,
            alt: 'Caramel cheesecake'
        }
    },

    {
        name: 'Carrot Cake',
        price: 40,
        rating: '4.9',
        category: '',
        amount: 0,
        img: {
            src: 'images/carrot cake.png',
            width: 100,
            height: 100,
            alt: 'Carrot cake'
        }
    },

    {
        name: 'Chocolate Chip Cookie',
        price: 30,
        rating: '4.5',
        category: '',
        amount: 0,
        img: {
            src: 'images/chocolate chip cookie.png',
            width: 100,
            height: 100,
            alt: 'Chocolate chip cookie'
        }
    },

    {
        name: 'Chocolate Glazed Brownie',
        price: 40,
        rating: '4.8',
        category: '',
        amount: 0,
        img: {
            src: 'images/chocolate glazed brownie.png',
            width: 100,
            height: 100,
            alt: 'chocolate glazed brownie'
        }
    },

    {
        name: 'Churros',
        price: 45,
        rating: '5.0',
        category: '',
        amount: 0,
        img: {
            src: 'images/churros.png',
            width: 100,
            height: 100,
            alt: 'Churros'
        }
        
    },
    
    {
        name: 'Cinnamon Roll',
        price: 35,
        rating: '4.9',
        category: '',
        amount: 0,
        img: {
            src: 'images/cinnamon roll.png',
            width: 100,
            height: 100,
            alt: 'Cinnamon roll'
        }
    },

    {
        name: 'Crêpes',
        price: 45,
        rating: '4.5',
        category: '',
        amount: 0,
    },

    {
        name: 'Croissant',
        price: 30,
        rating: '4.0',
        category: '',
        amount: 0,
    },

    {
        name: 'Cupcake',
        price: 35,
        rating: '3.9',
        category: '',
        amount: 0,
    },

];

// product images

const container = document.querySelector('#container');

products.forEach(product => {
    container.innerHTML += `
    <article>
        <h2>${product.name}</h2>
        <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
    </article>
    `;
});


