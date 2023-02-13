function load_pagina(pagina){
    window.location.href = pagina;
}
async function login() {

    let usuario = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;


    let cuentas_json = [];
    await fetch('./json/cuentas.json').then(response => response.json()).then(datos_cuentas => cuentas_json = datos_cuentas);


    let usuario_valido = 0;

    for (i = 0; i < cuentas_json.length; i++) {
        if (usuario == "admin" && password == cuentas_json[i].password) {
            load_pagina('add_product.html');
            usuario_valido = 1;
        } else if (usuario == cuentas_json[i].username && password == cuentas_json[i].password) {
            load_pagina('list_product.html');
            document.querySelector("#username").innerHTML = usuario;
            usuario_valido = 1;
        }
    }
    if (usuario_valido == 0) {
        alert("Error, Usuario o Contraseña incorrectos");
    }
}
// fetch('./script.js')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//     if(username == username && passwrod == passwrod){
//         alert("Sesion iniciada")
//     }else{
//         alert("Datos incorrectos")
//     }
// }



