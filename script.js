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
        img: {
            src: 'images/crepes.png'
        }
    },

    {
        name: 'Croissant',
        price: 30,
        rating: '4.0',
        category: '',
        amount: 0,
        img: {
            src: 'images/croissant.png'
        }
    },

    {
        name: 'Cupcake',
        price: 35,
        rating: '3.9',
        category: '',
        amount: 0,
        img: {
            src: 'images/cupcake.png'
        }
    },

];

// print products

const container = document.querySelector('#container');
const shoppingCart = document.querySelector('#shoppingCart')

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

function printProducts() {
    container.innerHTML = '';

    products.forEach((product, index) => {
        container.innerHTML += `
            <article>
                <h2 class="product-heading">${product.name}</h2>
                <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
                <div class="product-info">
                    <div class="product-price">Price: <span>${product.price}</span> kr</div>
                    <div class="product-rating">Rating: <span>${product.rating}</span></div>
                    <div class="product-amount">Amount: <span>${product.amount}</span></div>
                </div>
                <div class="button-container">
                    <button class="decrease" data-id="${index}">-</button>
                    <button class="increase" data-id="${index}">+</button>
                </div>
            </article>
            <div class="divider">
            </div class="divider">
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

printProducts();

