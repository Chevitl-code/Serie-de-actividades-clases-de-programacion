function calcular(){
    a = document.querySelector("#input").value
    b = document.querySelector("#Resultado")
    c = document.querySelector('#Resultado2')

    //bloque 1
    if (a < 576){
        b.innerHTML= 'XS'
    }

    else if(a < 768){
        b.innerHTML= 'SM'
    }

    else if(a < 962){
        b.innerHTML= 'MD'
    }

    else if (a < 1200){
        b.innerHTML= 'XL'
    }

    else (
        b.innerHTML= 'XXL'
    )
    
    //bloque 2
    if (a < 576){
        c.innerHTML= 'XS 2'
    }

    if(a < 768){
        c.innerHTML= 'SM 2'
    }

    if(a < 962){
        c.innerHTML= 'MD 2'
    }

    if (a <1200){
        c.innerHTML= 'XL 2'
    }
    else {
        c.innerHTML= 'XXL 2'
    }

}
