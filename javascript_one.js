// list of available products
let product_list=[{product : "sweatshirts",price:15},
                  {product : "shorts" , price : 20},
                  {product : "traditional-dress", price:23},
                  {product : "party_wear", price : 56},
                  {product : "makeup", price : 30}
                  ];

    function show_products(){
    console.log("Displaying product details and their price details");
    console.log("---------------------------------------------------");

    for (let i=0;i<product_list.length;i++) {
        console.log(`Name : ${product_list[i].product} , Price :${product_list[i].price}`);
    }
}

// function to check if user is logged in or not

let logged = true;
function check_loggedin()
{
if (logged == true)
{
    console.log("User has logged in, please add items to your cart");
    show_products();
    return true;
}
else{
    console.log("User is currently not logged in");
    return false;
}
}

let shopping_cart=[]

function add_products(){
    
    let user_ip = prompt("Please enter the product id you wanted to add to cart");
    console.log(user_ip);

    if(check_loggedin)
    {
        if (user_ip != null && (user_ip >= 0 && user_ip < product_list.length)){
            shopping_cart.push(product_list[user_ip]);
        }
        else{
            console.log("Product with that id doesnt exist");
            return;
        }
        console.log("Shopping Cart information after adding a product");
        console.log("-------------------------------------------");

        for (let i=0;i<shopping_cart.length;i++) {
            console.log(`Name : ${shopping_cart[i].product} , Price :${shopping_cart[i].price}`);
        } 
    }
}

// function to find total price of items in cart

function calculate_total(){
    let sum = 0

    for (let idx=0;idx<shopping_cart.length;idx++)
    {
        sum += shopping_cart[idx].price;
    }

    console.log(`Total price of products in cart ${sum}`);
}


check_loggedin();
add_products();
calculate_total();