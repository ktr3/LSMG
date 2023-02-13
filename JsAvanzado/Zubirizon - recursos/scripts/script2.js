// get the form and product list elements
const form = document.querySelector("#add-product_form");
const productList = document.querySelector("#product-list");

// an array to store the products
let products = [];

// function to add a product
function addProduct(event) {
    event.preventDefault();

    // get the form inputs
    const productName = form.querySelector("#product-name").value;
    const productDescription = form.querySelector("#product-description").value;
    const productPrice = form.querySelector("#product-price").value;
    const productDiscount = form.querySelector("#product-discount").value;
    const productImage = form.querySelector("#product-image").value;

    // create a product object
    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        discount: productDiscount,
        image: productImage
    };

    // add the product to the products array
    products.push(product);

    // update the product list on the page
    updateProductList();
}

// function to update the product list on the page
function updateProductList() {
    let html = "";
    for (const product of products) {
        html += `
      <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Discount: ${product.discount}%</p>
        <img src="${product.image}" alt="${product.name}" />
      </div>
    `;
    }
    productList.innerHTML = html;
}

// submit form event
form.addEventListener("submit", addProduct);

// log out function
function logOut() {
    // clear the products array
    products = [];

    // update the product list on the page
    updateProductList();


}

// log out button event
const logOut(){
    document.getElementById("logout-button").addEventListener("click", function () {
        window.location.href = "index.html";
    }
,)
}