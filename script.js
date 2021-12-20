let inizia = 0; 
//non permette di cambiare la difficoltà 
//durante il gioco
function difficoltaGioco(scelta) {
    if (inizia == 0) {
        const contenitore = document.getElementById('contenitore');
        contenitore.innerHTML = '';
        let contatore = 1;

        /* Genera il bootstrap per l'intero tabellone di gioco */
        for (let i = 1; i <= scelta; i++) {
            contenitore.innerHTML += `<div class="row g-0" id="row${i}">`;
            const row = document.getElementById('row' + i);
            for (let j = 1; j <= scelta; j++){
                let elemento = '<div class="quadrato">' + contatore++ + '</div>';
                
                row.innerHTML += elemento;

               
            }
        }
        inizia = 1;
    }
    return;
}

/*elemento.addEventListener('click',function(){
    console.log('ciao',this);
});*/