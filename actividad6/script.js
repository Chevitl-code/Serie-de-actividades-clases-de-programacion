function calcular() {
    let resultado = document.getElementById('secret_result');
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let imc = peso / (altura * altura);
    console.log(imc);

    if (imc < 18.5) {
        console.log("Tiene un IMC bajo");
        resultado.innerHTML = "Tiene un IMC bajo";
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Tiene un IMC normal");
        resultado.innerHTML = "Tiene un IMC normal";
    }

    else{
        console.log("Tiene un IMC alto");
        resultado.innerHTML = "Tiene un IMC alto";
    }
}

//if (imc > 24.9) //