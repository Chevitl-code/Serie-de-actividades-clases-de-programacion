function calcular() {

    let a = document.querySelector('#ancho').value
    let b = document.querySelector('#Resultado')

    if(a < 576){
        b.innerHTML = 'XS'
    }
    else if(a < 768){
        b.innerHTML = 'SM'
    }
    else if(a < 962){
        b.innerHTML = 'MD'
    }
    else if(a < 1200){
        b.innerHTML = 'XL'
    }
    else{
        b.innerHTML = 'XXL'
    }

}