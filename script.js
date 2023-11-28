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
        name: 'Chocolate Chip Cookie',
        price: 30,
        rating: '4.5',
        category: '',
        amount: 0,
        img: {
            src: 'images/chocolate chip cookie.png',
            width: 100,
            height: 100,
            alt: 'Three chocolate chip cookies',
            loading: 'lazy',
        }
    },
    
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
            alt: 'Cannoli with chocolate topping',
            loading: 'lazy'
        }
    },

    {
        name: 'Cupcake',
        price: 35,
        rating: '3.9',
        category: '',
        amount: 0,
        img: {
            src: 'images/cupcake.png',
            width: 100,
            height: 100,
            alt: 'Cupcake with pink frosting',
            loading: 'lazy'
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
            alt: 'Caramel cheesecake',
            loading: 'lazy'
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
            alt: 'Two layered carrot cake',
            loading: 'lazy'
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
            alt: 'Chocolate glazed brownie',
            loading: 'lazy'
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
            alt: 'Churros with small bowl of nutella in the middle',
            loading: 'lazy'
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
            alt: 'Cinnamon roll with frosting',
            loading: 'lazy'
        }
    },

    {
        name: 'Crêpes',
        price: 45,
        rating: '4.5',
        category: '',
        amount: 0,
        img: {
            src: 'images/crepes.png',
            width: 100,
            height: 100,
            alt: 'Crêpes with cream and syrup',
            loading: 'lazy'
        }
    },

    {
        name: 'Croissant',
        price: 30,
        rating: '4.0',
        category: '',
        amount: 0,
        img: {
            src: 'images/croissant.png',
            width: 100,
            height: 100,
            alt: 'Croissant',
            loading: 'lazy'
        }
    },

];


const container = document.querySelector('#container');
const shoppingCart = document.querySelector('#shoppingCart');
const filterContainer = document.querySelector('#filterContainer');


// increase & decrease buttons

function decreaseAmount(e) {
    const index = e.currentTarget.dataset.id;
    if (products[index].amount <= 0) {
        products[index].amount = 0;
    } else {
        products[index].amount -= 1;
    }
    printProducts();
}

function increaseAmount(e) {
    const index = e.currentTarget.dataset.id;
    products[index].amount += 1;
    printProducts();
}


// print products

function printProducts() {
    container.innerHTML = '';

    products.forEach((product, index) => {
        container.innerHTML += `
            <article>
                <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
                <h2 class="product-heading">${product.name}</h2>
                <div class="product-info">
                    <div class="product-price">Price: <span>${product.price}</span> kr</div>
                    <div class="product-rating">Rating: <span>${product.rating}</span></div>
                </div>
                <div class="button-container">
                    <button class="decrease" data-id="${index}">-</button>
                    <button class="increase" data-id="${index}">+</button>
                </div>
                <div class="product-amount">Amount: <span>${product.amount}</span></div>
            </article>
            <div class="divider">
            </div>
        `;
    });
    
    const decreaseBtn = document.querySelectorAll('button.decrease');
    const increaseBtn = document.querySelectorAll('button.increase');
    
    decreaseBtn.forEach(btn => {
        btn.addEventListener('click', decreaseAmount);
    });
    
    increaseBtn.forEach(btn => {
        btn.addEventListener('click', increaseAmount);
    });

    printCartProducts();
}


// print in-cart products

function printCartProducts() {
    shoppingCart.innerHTML = '';

    let sum = 0;

    products.forEach(product => {
        if (product.amount > 0) {
            sum += product.amount * product.price;
            shoppingCart.innerHTML += `
                <article>
                    <span>${product.name}</span> | <span>${product.amount}</span> | <span>${product.amount * product.price} kr</span>
                </article>
            `;
        }
    });

    shoppingCart.innerHTML += `
        <p>Total: ${sum} kr</p>
    `;
}


// sort products by name

function sortProductsByName() {
    products.sort((a, b) => a.name.localeCompare(b.name));
    printProducts();
}

const sortNameButton = document.querySelector('#sortNameButton');
sortNameButton.addEventListener('click', sortProductsByName);

// sort products by price

function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    printProducts();
}

const sortPriceButton = document.querySelector('#sortPriceButton');
sortPriceButton.addEventListener('click', sortProductsByPrice);


printProducts();

