console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let myCart = []; // I can change name to 'basket'
console.log(myCart);
function addToCart(item) {
  // console.log('Added item to cart:', item);
  myCart.push(item);
  return true;
  // return console.log(true);
  /* QUESTION: required - 'return true indicating the item was added',
  Is this asking to indicate/appear true in the console log (text is purple in console log)*/
} // console.log('Testing function, addToCart...');
addToCart('Eggs');
addToCart('Bacon');
addToCart('Cheese');
addToCart('Coffee');
console.log('Items in my cart...');
/*
function listItems() {
  for (let cartItem of myCart){
     return myCart;
   }
}
listItems();
*/

// function that list each item in myCart array
function listItems() {
  for (let cartItem of myCart){
    console.log(cartItem);
  }
}
listItems();

// function that declares myCart variable to nothing or empty
function emptyCart() {
  myCart = [];
}
console.log('Emptying myCart...', emptyCart());

// STRETCH Goal




/*
BELOW IS OLD CODE

function listItems(array) {
  for (let i=0; i<array.length; i++) {
  console.log(array[i]);
  }
} console.log('testing function, listItems...');
listItems(myCart);
/* QUESTION: should I remove 'array' from function so its like this, and when I call it?
    function listItems() {
      for (let i=0; i<array.length; i++) {
      console.log(array[i]);
      }
    } console.log('testing function, listItems...');
    listItems();
*/
