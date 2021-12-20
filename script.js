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
                let elemento = `<div class="quadrato" id="casella${contatore}">` + contatore++ + '</div>';
                row.innerHTML += elemento;
            }
        }
        inizia = 1;
        for (let i = 1; i <= contatore - 1; i++){
            console.log('leggo',`casella${i}`)
            document.getElementById(`casella${i}`).addEventListener("click", function ciao() {
                this.style.backgroundColor = "skyblue";
                this.style.cursor = "no-drop";
           });
        }
    }
    return;
}
