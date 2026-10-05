function Revisar(){ // boton para revisar //
    box1 = document.querySelector('#opcion1').checked//input 1//
    box2 = document.querySelector('#opcion2').checked// input 2 //
    p = document.querySelector('#parrafo') // Parrafo//
    enviar = document.querySelector('#btn-enviar') // boton de enviar// 
    

    if ( box1 || box2) {
        enviar.disabled=false
        p.innerHTML = 'Al menos una opción está marcada';
    }else {
        p.innerHTML ='los dos elementos *NO* tan marcados';
    }
}