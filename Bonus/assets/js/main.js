


function s1() {
    //leggo il nome iserito nel box  e controllo che sia una stringa
    var nomeUtente = document.getElementById("myInput").value;
    if (!isNaN(nomeUtente)) {
        alert("Devi inserire un nome valido!")
        var nomeUtente = document.getElementById("myInput").value = "";
    }

    //leggo il valore dei km iserito nel box e controllo che sia un numero
    var distanzaKm = document.getElementById("myInput2").value;
    if (isNaN(distanzaKm)) {
        alert("Devi inserire un valore numerico!")
        var distanzaKm = document.getElementById("myInput2").value = "";
    }
    //leggo il valore della casella del select
    var sesso = document.getElementById("sesso").value;

    //calcolo il prezzo del biglietto sapendo che il prezzo fisso e di 0.21 al km
    var prezzoBiglietto = distanzaKm * 0.21;


    //inizializzo variabile che prendere il valore in base all'eta dell passeggero
    var prezzoScontato;
    if (sesso === "minorenne") {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 2);

        //se il prezzo scontato e maggiore di 100 applico un ulteriore 10%
        if (prezzoScontato > 100) {
            prezzoScontato = prezzoScontato - ((prezzoScontato / 10) * 1);
            document.getElementById("offerta").innerHTML = "Sconto Minori + ulteriore 10%";
        } else {
            document.getElementById("offerta").innerHTML = "Sconto Minori";
        }

    } else if (sesso === "over65") {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 4);

        //se il prezzo scontato e maggiore di 100 applico un ulteriore 10%
        if (prezzoScontato > 100) {
            prezzoScontato = prezzoScontato - ((prezzoScontato / 10) * 1);
            document.getElementById("offerta").innerHTML = "Sconto Over 65 + ulteriore 10%";
        } else {
            document.getElementById("offerta").innerHTML = "Sconto Over 65";
        }

    } else if (sesso === "maggiorenne") {
        prezzoScontato = prezzoBiglietto;

        //se il prezzo scontato e maggiore di 100 applico un ulteriore 10%
        if (prezzoScontato > 100) {
            prezzoScontato = prezzoScontato - ((prezzoScontato / 10) * 1);
            document.getElementById("offerta").innerHTML = "Sconto 10%";
        }
    }


    //genero i due numeri random che mi servono per la carozza e il codiceCP
    var numeroCarozza = Math.ceil(Math.random() * 10);
    var codiceCP = Math.floor(Math.random() * (100000 - 90000 + 1) + 90000)


    //scrivo in html i risultati finali 
    document.getElementById("nomepasseggero").innerHTML = nomeUtente;
    document.getElementById("carozza").innerHTML = numeroCarozza;
    document.getElementById("codiceCP").innerHTML = codiceCP;
    document.getElementById("costoBiglietto").innerHTML = prezzoScontato.toFixed(2);

}

//se preme il tasto reset svuoto le due caselle di input
function s2() {
    var nomeUtente = document.getElementById("myInput").value = "";
    var distanzaKm = document.getElementById("myInput2").value = "";

}