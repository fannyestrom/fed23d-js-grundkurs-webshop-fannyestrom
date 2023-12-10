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

    // check if the subtotal is under 800 again and enable the invoice radio button
    if (calculateNewSubtotal() < 800) {
        invoiceRadio.removeAttribute('disabled');
    }
}

// Add this function to calculate the new subtotal after decreasing the amount
function calculateNewSubtotal() {
    let newSubtotal = 0;

    products.forEach((product) => {
        newSubtotal += product.amount * product.price;
    });

    return newSubtotal;
}

function increaseAmount(e) {
    const index = e.currentTarget.dataset.id;
    products[index].amount += 1;

    // check if the amount exceeds 10 to apply 10% discount
    if (products[index].amount > 10) {
        const discountedPrice = products[index].price * 0.9;
        products[index].discountedPrice = discountedPrice;
    }
  
    // visibility of add to cart popup
    const popup = document.querySelector('#popup');
    popup.style.display = 'block';
  
    // hide the popup after a short delay
    setTimeout(() => {
      popup.style.display = 'none';
    }, 1300); // adjust the delay (in milliseconds) as needed
  
    // start or reset the timer when the increase button is clicked
    startTimer();

    updateRadioAvailability();

    printProducts();
    printCartProducts();
}  


/* 
* sort products by different categories 
*/
// update the click event listeners for sorting by category

// sort by Name
const sortNameButton = document.querySelector('#sortNameButton');
sortNameButton.addEventListener('click', sortProductsByName);

function sortProductsByName() {
    products.sort((a, b) => a.name.localeCompare(b.name));
    printProducts();
}


// sort by Price
const sortPriceButton = document.querySelector('#sortPriceButton');
sortPriceButton.addEventListener('click', sortProductsByPrice);

function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    printProducts();
}


// sort by Rating
const sortRatingButton = document. querySelector('#sortRatingButton');
sortRatingButton.addEventListener('click', sortProductsByRating);

function sortProductsByRating() {
    products.sort((a, b) => a.rating - b.rating);
    printProducts();
}


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


let originalSubtotal = 0;

/*
* print products to shopping cart with order summary and subtotal
*/
function printCartProducts() {
    shoppingCart.innerHTML = '';

    originalSubtotal = 0;

    // store the total discounted amount for products with quantity >= 10
    let over10Discount = 0; 
  
    products.forEach((product) => {
        if (product.amount > 0) {
            let productPrice = product.price;
            let over10DiscountText = '';
            let subtotalText = '';

            if (product.amount >= 10) {
                // apply 10% discount if amount is 10 or more
                const productDiscount = product.price * 0.1 * product.amount;
                productPrice -= productDiscount;

                over10DiscountText = `(10% discount when ordering 10 or more of the same product!)`;
                subtotalText = `${product.amount} x ${product.price} SEK <br> -${productDiscount} SEK`;

                over10Discount += productDiscount;
            } else {
                subtotalText = `${product.amount} x ${product.price}`;
            }

            const productsSubtotal = product.amount * product.price;
            originalSubtotal += productsSubtotal;
    

            // shopping cart content and how it displays on the website
            shoppingCart.innerHTML += `
            <article class="cart-summary">
                <span>${product.name}</span> | ${subtotalText}
                <span>${over10DiscountText}</span>
            </article>`;
        }
    });

    
    // print shopping cart sum without discounts or surcharge
    shoppingCart.innerHTML += `
    <p class="total-sum">Subtotal: ${originalSubtotal - over10Discount} SEK</p>`;


    updateRadioAvailability();
    

    // check if it's Monday between 3 AM and 10 AM
    function isMondayBetween3AMand10AM() {
        /*
        const testDate = new Date('2023-12-04T09:00:00'); 
        const dayOfWeek = testDate.getDay();    
        const hour = testDate.getHours();
        */
    
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        const hour = currentDate.getHours();

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

    // Event listener for discount button
    const discountButton = document.querySelector('#discountButton');
    discountButton.addEventListener('click', addDiscountCode);

    function addDiscountCode() {
        const discountInput = document.getElementById('discountInput').value;

        // Clear existing discount messages
        document.querySelectorAll('.discount-text').forEach(message => message.remove());

        // Check if the entered discount code is valid
        if (discountInput === 'discount') {
            // Apply the discount directly to originalSubtotal
            const discountAmount = 10;

            // Update the displayed subtotal with the modified value
            printCartProducts(discountAmount);

            // update the displayed subtotal with the modified value
            shoppingCart.innerHTML += `
            <p class="total-sum">Updated subtotal with discount code: ${originalSubtotal - 10} SEK</p>`;

            // Display the discount code applied message
            shoppingCart.innerHTML += `<p class="discount-text">Discount code applied! -${discountAmount} SEK</p>`;

            // add discount code value to orderSummary
            updateOrderPopupContent(originalSubtotal, discountInput);
        } else {
            // Invalid discount code
            console.log('Invalid discount code');

            // Display the invalid discount code message
            shoppingCart.innerHTML += `<p class="discount-text">Invalid discount code!</p>`;
        }
    }


    return originalSubtotal;
}


/*
* payment options and order button
*/
// variables needed
const invoiceRadio = document.getElementById('invoiceRadio');
const cardRadio = document.getElementById('cardRadio');
const invoiceSection = document.getElementById('invoice');
const cardSection = document.getElementById('card');
const personalIDInput = document.getElementById('personalID');
const creditCardNumberInput = document.getElementById('creditCardNumber');
const creditCardYearInput = document.getElementById('creditCardYear');
const creditCardMonthInput = document.getElementById('creditCardMonth');
const creditCardCvcInput = document.getElementById('creditCardCvc');
const orderBtn = document.getElementById('orderBtn');

// make the order button active
function activateOrderButton() {
    const isInvoiceVisible = invoiceSection.style.display === 'block';
    const isCardVisible = cardSection.style.display === 'block';

    if (isInvoiceVisible) {
        const personalIDValue = personalIDInput.value.trim();
        const personalIDRegex = /^(\d{6}[-+]?|\d{8}-?)\s?\d{4}$/;

        if (personalIDRegex.test(personalIDValue)) {
            orderBtn.removeAttribute('disabled');
        } else {
            orderBtn.setAttribute('disabled', 'true');
        }
    } else if (isCardVisible) {
        const creditCardNumberValue = creditCardNumberInput.value.trim();
        const creditCardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;

        if (creditCardNumberRegex.test(creditCardNumberValue)) {
            orderBtn.removeAttribute('disabled');
        } else {
            orderBtn.setAttribute('disabled', 'true');
        }
    }
}

// invoice payment option not available when order is over 800 SEK
function updateRadioAvailability() {

    if (originalSubtotal > 800) {
        invoiceRadio.setAttribute('disabled', 'true');
        cardRadio.checked = true;
        invoiceSection.style.display = 'none';
        cardSection.style.display = 'block';
    } else {
        invoiceRadio.removeAttribute('disabled');
    }
}

// toggle between payment options
invoiceRadio.addEventListener('change', () => {
  invoiceSection.style.display = invoiceRadio.checked ? 'block' : 'none';
  cardSection.style.display = cardRadio.checked ? 'block' : 'none';
  activateOrderButton();
});

cardRadio.addEventListener('change', () => {
  cardSection.style.display = cardRadio.checked ? 'block' : 'none';
  invoiceSection.style.display = invoiceRadio.checked ? 'block' : 'none';
  activateOrderButton();
});


personalIDInput.addEventListener('input', activateOrderButton);
creditCardNumberInput.addEventListener('input', activateOrderButton);
creditCardYearInput.addEventListener('input', activateOrderButton);
creditCardMonthInput.addEventListener('input', activateOrderButton);
creditCardCvcInput.addEventListener('input', activateOrderButton);

updateRadioAvailability();

/*
* order summary popup
*/
// Add a click event listener to the existing order button
document.querySelector('#orderBtn').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display the order summary
    displayOrderSummary();
});


function displayOrderSummary() {
    console.log('Displaying order summary...');

    updateOrderPopupContent(originalSubtotal);

    const orderSummary = document.getElementById('orderSummary');
    orderSummary.classList.remove('hidden');
}

function updateOrderPopupContent(subtotal) {
    const orderSummary = document.getElementById('orderSummary');
    const cartProducts = products.filter(product => product.amount > 0);
    
    // Gather information about the customer from the form
    const customerInfo = {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        street: document.getElementById('street').value,
        passcode: document.getElementById('passcode').value,
        postalcode: document.getElementById('postalcode').value,
        city: document.getElementById('city').value,
        tel: document.getElementById('tel').value,
    };

    // estimated time of delivery
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + 30 * 60000);

    orderSummary.innerHTML = '';

    orderSummary.innerHTML = `
        <h2 class="order-summary-heading">Order Summary</h2>
        <h3 class="summary-subheadings">Customer information:</h3>
        <p><strong>Name:</strong> ${customerInfo.firstName} ${customerInfo.lastName}</p>
        <p><strong>Email:</strong> ${customerInfo.email}</p>
        <p><strong>Address:</strong> ${customerInfo.street}, ${customerInfo.postalcode} ${customerInfo.city}</p>
        <p><strong>Phone:</strong> ${customerInfo.tel}</p>
        <h3 class="summary-subheadings">Products ordered:</h3>
        ${cartProducts.map(product => `<p>${product.name} - x${product.amount} - ${product.price} SEK</p>`).join('')}
        <h4>Discount code:</h3>
        <p>${discountInput.value} -10 SEK</p>
        <h3 class="summary-subheadings">Subtotal:</h3>
        <p>${subtotal} SEK</p>
        <h3 class="summary-subheadings">Estimated Time of Delivery:</h3>
        <p>${deliveryTime.toLocaleTimeString()}</p>
    `;
}


printProducts(); 

printCartProducts();
