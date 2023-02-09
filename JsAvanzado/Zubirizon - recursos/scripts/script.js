
function btnPressed(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    var user = fetch("../json/cuentas.json")
    
    .then(Response => Response.json())
    .then(data => {
        const users = data.users;
        const isValid = users.some(user =>{
            return user.username === username && user.password === password;
        });
        if(isValid){
            window.location.href = "../add_products.html";
        }else{
            alert("Incorrect username or password");
        }
    })
};