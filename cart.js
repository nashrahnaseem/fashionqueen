var count=0;
var bag= document.getElementById("bag");
 function addToCart(productId){
cartProducts=[]
alreadyExisting = localStorage.getItem("mycart");
if(alreadyExisting){//if anything in cart
cartProducts = JSON.parse(alreadyExisting)   
}

cartProducts.push(productId)
bag.innerHTML=++count;
localStorage.setItem("mycart",JSON.stringify(cartProducts) );
bag.innerHTML=JSON.parse(localStorage.getItem("mycart")).length
// displayProducts()// update the screen
}

function removeFromCart(productId){
cartProducts=[]
alreadyExisting = localStorage.getItem("mycart");
if(alreadyExisting){//if anything in cart
cartProducts = JSON.parse(alreadyExisting)   
}
cartProducts = cartProducts.filter(p=> p !== productId)
localStorage.setItem("mycart",JSON.stringify(cartProducts) );
bag.innerHTML=cartProducts.length 

// displayProducts()// update the screen
}
bag.innerHTML=JSON.parse(localStorage.getItem("mycart")).length