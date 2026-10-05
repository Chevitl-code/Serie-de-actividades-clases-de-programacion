function button(){

    let email = (document.querySelector("#input").value)
    let contraseña = (document.querySelector("#input2").value)
    let a = (document.querySelector("#usuario"))
    
    
    if (email == "persona123@gmail.com" && contraseña == "123")
        {
            alert('Hola persona 123');
            a.innerHTML="usuario correcto";
            
        } else {
            alert('anda bobo anda pa alla')
            a.innerHTML="usario incorrecto";
        }
    }
