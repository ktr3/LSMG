const form = document.getElementById("login-form");
form.getElementById("submit", function(){
    preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("../cuentas.json")
    .then(Response => Response.json())
    .then(data => {
        const users = data.users;
        const isValid = users.some(user =>{
            return user.username === username && user.password === password;
        });
        if(isValid){
            window.location.href = "../add_products.html"
        }else{
            alert("Incorrect username or password")
        }
    })
})