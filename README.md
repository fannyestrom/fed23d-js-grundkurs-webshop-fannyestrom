[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/lVSydX1g)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12861571&assignment_repo_type=AssignmentRepo)



# Assignment 1: Web shop 

(Individual assignment)

Course: Javascript Basic Course 




### 🔗 Link to the Github repo
https://github.com/Medieinstitutet/fed23d-js-grundkurs-webshop-fannyestrom.git

Live website: medieinstitutet.github.io/fed23d-js-grundkurs-webshop-fannyestrom/


## About the author

Name: Fanny Holmström

Education programme and school: Front End Developer, *Medieinstitutet*

Github Profile: [@fannyestrom](https://www.github.com/octokatherine)

2023




## About the project

This assignment involved building a web shop in 4 weeks with focus on learning Javascript. Less focus was required regarding the styling which is why it is lacking in different parts.

### Requirements

#### General
- The website should be one page, i e you need to scroll to reach different sections.
- The website should be responsive with versions for mobile, tablet and desktop.
- The interface/page appearance should be intuitive.
- The entire ordering process should be possible using only the keyboard to make it accessible. 
- There should be increase and decrease buttons related to each product to add and subtract to the amount in the shopping cart. 
- The products should be hardcoded in the file (no API, database or JSON file).
- When clicking the order button, an order confirmation box should appear with information about the order and delivery time.
- There should be functions for sorting the products by name, price, category and rating. 

#### Order summary
- The subtotal should be updated based on changes made related to the quantity of each product ordered in real-time. 
- There should be an order summary showing only the donuts that have been ordered. This should therefore be separate from the shopping cart and customer form. 

#### Products
There should be at least 10 products and each should have the following properties:
- name
- price
- rating
- category

#### Special rules 
- On Mondays before 10 AM, a 10% discount is applied to the entire order. This is displayed in the order summary as a line with the text "Monday discount: 10% off on the entire order!"
- On Fridays after 3 PM until Monday 3 AM there should be a 15% weekend surcharge added to the product prices. The customer should not be informed about the surcharge, the price of the products should only be higher. 
- If the subtotal is more than 800SEK, invoice as a payment option should not be available. 
- If there is at least 10 or more of the same product ordered the price of the product in question should be reduced by 10%. 
- If the order has 15 or more products, shipping should be free. Otherwise the shipping cost is 25 SEK + 10% of the subtotal. 
- If the order is not placed in 15 minutes, the form should be cleared and the customer should be notified that they took to long placing the order. 

#### Customer information form
The form in which the customer fills in their information should include: 

Fields for:
- first name
- last name
- address 
- zip code
- city 
- optional: door pass code
- phone (mobile)
- email address
- payment method selection
    - card or invoice 
        - If invoice is chosen, the form field for a Swedish personal ID should be displayed. This field should also be validated before the form can be submitted, meaning that a correct personal ID number must be entered. 
        - If card is chosen as the payment method, fields for a card number, expiration date/year and CVC should be displayed. These do not need to be validated. 
- checkbox for approval of handling personal data
- checkbox for subscribing to the newsletter (should be checked by default)

- All form fields should be validated, and the form/order should not be allowed to be submitted if there are any errors. Errors should clearly be marked and communicated (e.g. not solely with red color, taking accessibility into account).
- When the form is correctly filled out the order button should be activated; otherwise it should be greyed out. 
- There should be a "Clear order"-button that resets all form fields as well as any products in the shopping cart (meaning the quantity is reset to 0).
- There should be a field to enter a discount code. 

#### Additional information 
- There should be some sort of visual feedback when the subtotal in the shopping cart updates. For example, a visual change such as a color shift or size change.

#### Technical notes
- The CSS should be built using SASS (or Tailwind).
- You must only use "Vanilla JavaScript", i.e. you MUST NOT use a framework. 
- HTML can be written in the HTML document; nodes do NOT need to be created with JavaScript more than absolutely necessary.



## Languages and tools
- Semantic HTML5
- CSS/SASS
- Javascript
- grid
- flexbox
- RegEx

## Examined areas
- logic & flow of program
- comments and self-documenting code
- high code quality, conventions
- conditionals (if statements)
- events
- DOM manipulation
- functions
- variables
- arithmetic
- objects
- arrays
- timers
- loops
- date


## Screenshots

### HTML Validation
![Alt text](images/screencapture-validator-w3-org-nu-2023-12-10-23_42_20.png)

### CSS Validation 
![Alt text](images/screencapture-jigsaw-w3-org-css-validator-validator-2023-12-10-23_50_56.png)

![Alt text](images/screencapture-jigsaw-w3-org-css-validator-validator-2023-12-10-23_50_56-2.png)

### Lighthouse
![Alt text](<images/Skärmavbild 2023-12-10 kl. 23.55.49.png>)

### Full Website 
![Alt text](images/screencapture-medieinstitutet-github-io-fed23d-js-grundkurs-webshop-fannyestrom-2023-12-10-23_56_32.png)



