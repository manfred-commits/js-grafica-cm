// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.


// sezione funzioni


// 3.Tramite una funzione javascript disegnare in pagina la griglia
function makePlayground(num,id){
    for(var i = 0; i < num; i++){
        document.getElementById(id).innerHTML+=`<div class="square">${i}</div>`;
    }

}


// /sezione funzioni




// sezione codice principale

// 1.Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.

var numeroUtente = parseInt(prompt("Inserisci il numero di celle che devono formare il campo da gioco: "));

// in questa variabile sarà inserito il nome dell'id, del contenitore in cui si vogliono generare le celle
var id ="game-container";




// 2.Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

// Assumendo che le celle siano di dimensione definita, pari a 100px di altezza e 100px di larghezza, possiamo:
// - o impostare, nel css, un container flex che avrà una larghezza massima pari a 1000px (cioè 10 celle);
// - o impostare, sempre nel css, un container grid che avrà un grid-template-columns pari a repeat(10, 1fr) ed un width di 1000px (cioè 10 celle).


makePlayground(numeroUtente, id);

// 4.



// /sezione codice principale
