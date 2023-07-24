var cartItems=[];
var totalamount =0;
var cart = document.getElementById("cart")
cart.style.display = "none";

function add(price,food){
    var item = {
        price:price,
        food:food
    }
    
    
   for(let i=0;i<cartItems.length;i++){
        if(cartItems[i].food === item.food ){
            alert("repeated values does not allow");
            return;
        }
    }
    
    if(cartItems.length == 0){
        cart.style.display = "flex";
    }
    cartItems.push(item)
    totalamount += price;
    
    displayCart();
    
}


function remove(i,price){
    cartItems.splice(i,1);
    totalamount -= price;
    if(cartItems.length == 0){
        cart.style.display = "none";
    }
    displayCart();
}



function displayCart(){
    var cartElement = document.getElementById('items');
    cartElement.innerHTML='';
    for(var i=0;i<cartItems.length;i++){
        var items = cartItems[i];
        cartElement.innerHTML +=`<div>
        <p>${items.food} -INR ${items.price}</p>
        <button onclick="remove('${i}',${items.price})">remove</button>
    </div>`
    }
    var total = document.getElementById("total");
    total.innerHTML=`total: ${totalamount}`
}
