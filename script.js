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
        const discountedPrice = calculateDiscountedPrice(product.price);

        const subtotal = product.amount * discountedPrice;

        container.innerHTML += `
            <article>
                <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
                <h2 class="product-heading">${product.name}</h2>
                <div class="product-info">
                    <div class="product-price">Price: <span>${discountedPrice}</span> SEK</div>
                    <div class="product-rating">Rating: <span>${product.rating}</span></div>
                </div>
                <div class="button-container">
                    <button class="decrease" data-id="${index}">-</button>
                    <button class="increase" data-id="${index}">+</button>
                </div>
                <div class="product-amount">Amount: <span>x${product.amount}</span></div>
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

// function to calculate the surcharge
function calculateSurcharge(originalSubtotal) {
    // check if the surcharge is applicable (friday 3pm - monday 3am)
    if (hasWeekendSurcharge()) {
        const surchargePercentage = 0.15;
        const surchargeAmount = originalSubtotal * surchargePercentage;
        const totalWithSurcharge = originalSubtotal + surchargeAmount;

        return totalWithSurcharge;
    }

    // if surcharge is not applicable, return the original subtotal
    return originalSubtotal;
}


// define surchargeAmount as a global variable
let surchargeAmount = 0;


// print in-cart products
// print in-cart products with discount information
function printCartProducts() {
    shoppingCart.innerHTML = '';
  
    let sum = 0;
    let discountApplied = false;
  
    products.forEach((product) => {
      if (product.amount > 0) {
        const originalSubtotal = product.amount * product.price;

        // calculate the discounted or surcharged subtotal
        const subtotal = calculateDiscountedPrice(originalSubtotal);
  
        // check if the surcharge is applicable
        const surchargeSubtotal = hasWeekendSurcharge()
          ? calculateSurcharge(originalSubtotal)
          : originalSubtotal;
  
        sum += subtotal; // accumulate the discounted or surcharged subtotal
  
        shoppingCart.innerHTML += `
          <article class="cart-summary">
            <span>${product.name}</span> | <span>x${product.amount}</span> | 
            <span>${calculateDiscountedPrice(originalSubtotal)} SEK</span>
          </article>`;
  
        // check if the discount is applied to at least one product in the cart
        if (originalSubtotal !== subtotal) {
            discountApplied = true;
        }
      }
    });

    // display monday discount information in shoppingCart
    if (isMondayBetween3AMand10AM() && discountApplied) {
      shoppingCart.innerHTML += `
        <p class="discount-info">Monday discount: 10% off the entire order!</p>`;
    } 
  
    shoppingCart.innerHTML += `
      <p class="total-sum">Subtotal: ${sum} SEK</p>`;
}

// check if it's Monday between 3 AM and 10 AM
function isMondayBetween3AMand10AM() {
    const testDate = new Date('2023-12-04T09:00:00'); 
    const dayOfWeek = testDate.getDay();
    const hour = testDate.getHours();
    
    /*
    const currentDate = new Date();

    const dayOfWeek = currentDate.getDay();
    const hour = currentDate.getHours();
    */
    return dayOfWeek === 1 && hour >= 3 && hour < 10;
}

// check if there is a surcharge on the weekend
function hasWeekendSurcharge() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const hour = currentDate.getHours();

    return (dayOfWeek === 5 && hour >= 15) || (dayOfWeek >= 1 && dayOfWeek <= 4) || (dayOfWeek === 0 && hour < 3);
}
  
// call the function to print in-cart products 
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
10% off on Mondays before 10 am
15% surcharge on Fridays after 3 pm to Monday 3 am
*/

// Function to calculate the discounted price
function calculateDiscountedPrice(originalPrice) {
    
    const testDate = new Date('2023-12-04T09:00:00'); 
    const dayOfWeek = testDate.getDay();
    const hour = testDate.getHours();
    
    /*
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const hour = currentDate.getHours();
    */
    
    // Apply 10% discount on Mondays between 3 AM and 10 AM
    if (dayOfWeek === 1 && hour >= 3 && hour < 10) {
        console.log('10% discount applied!');
        return Math.round(originalPrice * 0.9);
    }

    // Apply 15% weekend surcharge on Fridays after 3 PM to Monday 3 AM
    if ((dayOfWeek === 5 && hour >= 15) || (dayOfWeek >= 1 && dayOfWeek <= 4) || (dayOfWeek === 0 && hour < 3)) {
        console.log('15% surcharge applied!');
        return Math.round(originalPrice * 1.15);
    }

    // No discount or surcharge
    console.log('No discount or surcharge.');
    return originalPrice;
}
  

// print products with discounts
function printProductsWithDiscount() {
    container.innerHTML = '';
  
    products.forEach((product, index) => {
      const discountedPrice = calculateDiscountedPrice(product.price);

      const subtotal = product.amount * discountedPrice;
      const discountedSubtotal = calculateDiscountedPrice(subtotal);
  
      container.innerHTML += `
        <article>
            <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
            <h2 class="product-heading">${product.name}</h2>
            <div class="product-info">
                <div class="product-price">Price: <span>${discountedPrice}</span> SEK</div>
                <div class="product-rating">Rating: <span>${product.rating}</span></div>
            </div>
            <div class="button-container">
                <button class="decrease" data-id="${index}">-</button>
                <button class="increase" data-id="${index}">+</button>
            </div>
            <div class="product-amount">Amount: <span>x${product.amount}</span></div>
            ${product.amount > 0 ? `<div class="product-subtotal">Subtotal: <span>${discountedSubtotal} SEK</span></div>` : ''}
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
  
    // call function to print the shopping cart products
    printCartProducts();
}
  
// function to print products with discounts 
printProductsWithDiscount();



/* fixat så priserna matchar varukorgen men 
- priset ska ju inte ändras 10% i själva arrayen utan bara varukorgen
x texten som säger att det är 10% dyker just nu inte upp
- helst ska ju även varukorgens innehåll visa originalpriset och sedan reapriset i anslutning också
*/
  



  
