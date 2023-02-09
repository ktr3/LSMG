const form = document.getElementById("add-product-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const productName = document.getElementById("product-name").value;
  const productDescription = document.getElementById("product-description").value;
  const productPrice = document.getElementById("product-price").value;
  const productDiscount = document.getElementById("product-discount").value;
  const productImage = document.getElementById("product-image").files[0];

  // Add logic to validate user input and add the product to the product list

  // Clear the form fields
  document.getElementById("product-name").value = "";
  document.getElementById("product-description").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-discount").value = "";
  document.getElementById("product-image").value = "";
});

const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", function() {
  // Add logic to log out the user
});