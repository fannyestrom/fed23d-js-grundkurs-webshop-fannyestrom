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
// Function to print in-cart products with discount information
function printCartProducts() {
    shoppingCart.innerHTML = '';
  
    let sum = 0;
    let discountApplied = false;
  
    products.forEach((product) => {
      if (product.amount > 0) {
        const subtotal = product.amount * product.price;
  
        // Check if it's Monday before 10 am and apply the discount
        const discountedSubtotal = isMondayBefore10AM()
          ? calculateDiscountedPrice(subtotal)
          : subtotal;
  
        sum += discountedSubtotal; // Use discountedSubtotal here
  
        shoppingCart.innerHTML += `
          <article class="cart-summary">
            <span>${product.name}</span> | <span>${product.amount}</span> | 
            <span>${isMondayBefore10AM() ? discountedSubtotal : subtotal} kr</span>
          </article>`;
  
        // Check if the discount is applied to at least one product in the cart
        if (discountedSubtotal !== subtotal) {
          discountApplied = true;
        }
      }
    });
  
    if (discountApplied) {
      shoppingCart.innerHTML += `
        <p class="discount-info">Monday discount: 10% off orders!</p>`;
    }
  
    shoppingCart.innerHTML += `
      <p class="total-sum">Total: ${sum} kr</p>`;
}
  
// Call the function to print in-cart products initially
printCartProducts();
  


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


/* 
10% off on Mondays before 10am
*/
// Function to calculate the discounted price
function calculateDiscountedPrice(originalPrice) {
    // Apply 10% discount
    return Math.round(originalPrice * 0.9);
}
  

// Function to print products with discounts
function printProductsWithDiscount() {
    container.innerHTML = '';
  
    products.forEach((product, index) => {
      const discountedPrice = isMondayBefore10AM()
        ? calculateDiscountedPrice(product.price)
        : null;

      const subtotal = product.amount * (discountedPrice !== null ? discountedPrice : product.price);
      const discountedSubtotal = discountedPrice !== null ? calculateDiscountedPrice(subtotal) : subtotal;
  
      container.innerHTML += `
        <article>
            <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
            <h2 class="product-heading">${product.name}</h2>
            <div class="product-info">
                <div class="product-price">Price: <span>${discountedPrice !== null ? discountedPrice : product.price}</span> kr</div>
                <div class="product-rating">Rating: <span>${product.rating}</span></div>
            </div>
            <div class="button-container">
                <button class="decrease" data-id="${index}">-</button>
                <button class="increase" data-id="${index}">+</button>
            </div>
            <div class="product-amount">Amount: <span>${product.amount}</span></div>
            ${product.amount > 0 ? `<div class="product-subtotal">Subtotal: <span>${discountedSubtotal} kr</span></div>` : ''}
        </article>
        <div class="divider"></div>
      `;
    });
  
    const decreaseBtn = document.querySelectorAll('button.decrease');
    const increaseBtn = document.querySelectorAll('button.increase');
  
    decreaseBtn.forEach((btn) => {
      btn.addEventListener('click', decreaseAmount);
    });
  
    increaseBtn.forEach((btn) => {
      btn.addEventListener('click', increaseAmount);
    });
  
    // Call the function to print the shopping cart products
    printCartProducts();
}

 
// Function to check if it's Monday before 10 AM
function isMondayBefore10AM() {
    
    /*
    // For testing purposes, set the current day to Monday and time to before 10 AM
    const testDate = new Date('2023-11-27T09:00:00'); // Adjust the date and time as needed
  
    const dayOfWeek = testDate.getDay(); // Sunday is 0, Monday is 1, and so on
    const hour = testDate.getHours();
    */

    const currentDate = new Date();

    // Check if it's Monday and before 10 AM
    const dayOfWeek = currentDate.getDay(); // Sunday is 0
    const hour = currentDate.getHours();
  
    return dayOfWeek === 1 && hour < 10;
}

  
// Call the function to print products with discounts initially
printProductsWithDiscount();
  
  

  
