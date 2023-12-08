/*
* product array
*/
const products = [
    {
        name: 'Chocolate Chip Cookie',
        price: 30,
        rating: '4.5',
        category: 'May contain traces of nuts',
        amount: 0,
        img: {
            src: 'images/chocolate_chip_cookie.png',
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
        category: 'Vegan',
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
        category: 'May contain traces of nuts',
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
        category: 'Vegan',
        amount: 0,
        img: {
            src: 'images/caramel_cheesecake.png',
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
        category: 'Vegan',
        amount: 0,
        img: {
            src: 'images/carrot_cake.png',
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
        category: 'May contain traces of nuts',
        amount: 0,
        img: {
            src: 'images/chocolate_glazed_brownie.png',
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
        category: 'Gluten-free',
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
        category: 'Gluten-free',
        amount: 0,
        img: {
            src: 'images/cinnamon_roll.png',
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
        category: 'Vegan',
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
        category: 'Gluten-free',
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


/*
* containers
*/
const container = document.querySelector('#container');
const shoppingCart = document.querySelector('#shoppingCart');
const filterContainer = document.querySelector('#filterContainer');


/*
* display product array on website
*/
function printProducts() {
    container.innerHTML = '';

    products.forEach((product, index) => {

        // layout for how the product objects display on the website initially
        container.innerHTML += `
            <article>
                <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
                <h2 class="product-heading">${product.name}</h2>
                <div class="product-info">
                    <div class="product-price">Price: <span>${product.price}</span> SEK</div> 
                    <div class="product-rating">Rating: <span>${product.rating}</span></div>
                    <div class="product-category">Category: <span>${product.category}</span></div>
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


/*
* light vs dark theme toggle
*/
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}


/*
* 15 minute timer
*/
let timer;
let remainingTime = 900; // 15 minutes in seconds

// function to update the countdown display
function updateCountdown() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // update the content of the countdownTimer div
    document.getElementById('countdownTimer').innerText = `Shopping cart empties in: ${formattedTime}`;
}

// function to start or reset the timer
function startTimer() {
    // clear existing timer if any
    clearTimeout(timer);

    // set a new timer for 1 second
    timer = setInterval(() => {
        // update the remaining time
        remainingTime--;

        // update the countdown display
        updateCountdown();

        // check if the timer has reached 0
        if (remainingTime <= 0) {
            // timer expired, reset the amount of products and empty the shopping cart
            products.forEach(product => {
                product.amount = 0;
            });

            printProducts();
            printCartProducts();

            // Clear form values
            document.getElementById('customerForm').reset();

            // Clear the countdown display
            document.getElementById('countdownTimer').innerText = 'Sorry! Shopping cart emptied, try to be faster next time!';
            
            // Clear the interval to stop the timer
            clearInterval(timer);
        }
    }, 1000); // 1 second in milliseconds
}

// call the updateCountdown function initially to display the initial countdown
updateCountdown();


/*
* increase & decrease buttons
*/ 
function decreaseAmount(e) {
    const index = e.currentTarget.dataset.id;
    if (products[index].amount <= 0) {
        products[index].amount = 0;
    } else {
        products[index].amount -= 1;
    }
    printProducts();
    printCartProducts();
}

function increaseAmount(e) {
    const index = e.currentTarget.dataset.id;
    products[index].amount += 1;
    printProducts();
    printCartProducts();

    // start or reset the timer when the increase button is clicked
    startTimer();
}


/* 
* sort products by different categories 
*/
// update the click event listeners for sorting by category

// sort by Name
function sortProductsByName() {
    products.sort((a, b) => a.name.localeCompare(b.name));
    printProducts();
}

const sortNameButton = document.querySelector('#sortNameButton');
sortNameButton.addEventListener('click', sortProductsByName);


// sort by Price
function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    printProducts();
}

const sortPriceButton = document.querySelector('#sortPriceButton');
sortPriceButton.addEventListener('click', sortProductsByPrice);


// sort by 'Vegan'
const sortVeganButton = document.querySelector('#sortVeganButton');

sortVeganButton.addEventListener('click', () => {
    const veganProducts = products.filter(product => product.category === 'Vegan');
    displayProducts(veganProducts);
});


// sort by 'Gluten-free'
const sortGlutenFreeButton = document.querySelector('#sortGlutenFreeButton');

sortGlutenFreeButton.addEventListener('click', () => {
    const glutenFreeProducts = products.filter(product => product.category === 'Gluten-free');
    displayProducts(glutenFreeProducts);
});


// sort by 'May contain traces of nuts'
const sortNutsButton = document.querySelector('#sortNutsButton');

sortNutsButton.addEventListener('click', () => {
    const nutsProducts = products.filter(product => product.category === 'May contain traces of nuts');
    displayProducts(nutsProducts);
});

// display the filtered products
function displayProducts(filteredProducts) {
    container.innerHTML = '';

    filteredProducts.forEach((product, index) => {

        container.innerHTML += `
            <article>
                <img src="${product.img.src}" alt="" width="" height="" loading="lazy">
                <h2 class="product-heading">${product.name}</h2>
                <div class="product-info">
                    <div class="product-price">Price: <span>${product.price}</span> SEK</div>
                    <div class="product-rating">Rating: <span>${product.rating}</span></div>
                    <div class="product-category">Category: <span>${product.category}</span></div>
                </div>
                <div class="button-container">
                    <button class="decrease" data-id="${index}">-</button>
                    <button class="increase" data-id="${index}">+</button>
                </div>
                <div class="product-amount">Amount: <span>x${product.amount}</span></div>
            </article>
            <div class="divider"></div>
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
}


/*
* print products to shopping cart with order summary and subtotal
*/
function printCartProducts() {
    shoppingCart.innerHTML = '';

    let originalSubtotal = 0;
  
    products.forEach((product) => {
        if (product.amount > 0) {
            const addedProductsSubtotal = product.amount * product.price;
            originalSubtotal += addedProductsSubtotal;

            // shopping cart content and how it displays on the website
            shoppingCart.innerHTML += `
            <article class="cart-summary">
                <span>${product.name}</span> | <span>x${product.amount}</span> | 
                <span>${addedProductsSubtotal} SEK</span>
            </article>`;
        }
    });

    
    // print shopping cart sum without discounts or surcharge
    shoppingCart.innerHTML += `
    <p class="total-sum">Subtotal: ${originalSubtotal} SEK</p>`;
    

    // check if it's Monday between 3 AM and 10 AM
    function isMondayBetween3AMand10AM() {
        const testDate = new Date('2023-12-06T09:00:00'); 
        const dayOfWeek = testDate.getDay();    
        const hour = testDate.getHours();
    
        /*
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        const hour = currentDate.getHours();
        */

        return dayOfWeek === 1 && hour >= 3 && hour < 10;
    }

    // display monday discount information in shopping cart
    if (isMondayBetween3AMand10AM()) {
        shoppingCart.innerHTML += `
        <p class="discount-info">Monday discount: 10% off the entire order!</p>`;
        
        // calculate the discounted price
        originalSubtotal = Math.round(originalSubtotal * 0.9);

        // update the displayed subtotal with the modified value
        shoppingCart.innerHTML += `
        <p class="total-sum">Discounted subtotal: ${originalSubtotal} SEK</p>`;
    }


    // check if it's between Friday 15 PM and Monday 3 AM
    function hasWeekendSurcharge() {
        /*
        const testDate = new Date('2023-12-07T16:00:00'); 
        const dayOfWeek = testDate.getDay();    
        const hour = testDate.getHours();
        */
        
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        const hour = currentDate.getHours();
        
        return (dayOfWeek === 5 && hour >= 15) || (dayOfWeek >= 1 && dayOfWeek <= 4) || (dayOfWeek === 0 && hour < 3);
        
    }

    // display surcharge in shopping cart
    if (hasWeekendSurcharge()) {
        // calculate the surcharged price
        originalSubtotal = Math.round(originalSubtotal * 1.15);

        // update the displayed subtotal with the modified value
        shoppingCart.innerHTML += `
        <p class="total-sum">Subtotal: ${originalSubtotal} SEK</p>`;
    }


    const discountButton = document.querySelector('#discountButton');
    discountButton.addEventListener('click', addDiscountCode)

    if (addDiscountCode()) {
        originalSubtotal = Math.round(originalSubtotal - 10);

        shoppingCart.innerHTML += `
        <p class="discount-text">Discount code applied!</p>`;
    }

    return originalSubtotal;
}


/*
* payment options
*/
const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
const inputs = [
  document.querySelector('#creditCardNumber'),
  document.querySelector('#creditCardYear'),
  document.querySelector('#creditCardMonth'),
  document.querySelector('#creditCardCvc'),
  document.querySelector('#personalID')
];

const invoiceOption = document.querySelector('#invoice');
const cardOption = document.querySelector('#card');
const orderBtn = document.querySelector('#orderBtn');

// default options
let selectedPaymentOption = 'card';

// REGEX
const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);
const creditCardNumberRegEx = new RegExp(/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/); // MasterCard

// add event listeners
inputs.forEach(input => {
  input.addEventListener('focusout', activateOrderButton);
  input.addEventListener('change', activateOrderButton);
});

cardInvoiceRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', switchPaymentMethod);
});

/*
 * switches between invoice payment method and
 * card payment method. toggles visibility.
 */
function switchPaymentMethod(e) {
  invoiceOption.classList.toggle('hidden');
  cardOption.classList.toggle('hidden');

  selectedPaymentOption = e.target.value;
}

function isPersonalIdNumberValid() {
  return personalIdRegEx.exec(personalId.value);
}

/*
 * activate order button if all fields are correctly filled.
 */
function activateOrderButton() {
  orderBtn.setAttribute('disabled', '');

  if (selectedPaymentOption === 'invoice' && !isPersonalIdNumberValid()) {
    return;
  }
  
  if (selectedPaymentOption === 'card') {
    // check card number
    if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
      console.warn('Credit card number not valid.');
      return;
    }

    // check card year
    let year = Number(creditCardYear.value);
    const today = new Date();
    const shortYear = Number(String(today.getFullYear()).substring(2));

    if (year > shortYear + 2 || year < shortYear) {
      console.warn('Credit card month not valid.');
      return;
    }

    // month, "padStart" med 0
    
    // check card CVC
    if (creditCardCvc.value.length !== 3) {
      console.warn('CVC not valid.');
      return;
    }
  }

  orderBtn.removeAttribute('disabled');
}


printProducts(); 

printCartProducts();
