


function s1() {
    //
    var nomeUtente = document.getElementById("myInput").value;
    var distanzaKm = document.getElementById("myInput2").value;
    var sesso = document.getElementById("sesso").value;

    var prezzoBiglietto = distanzaKm * 0.21;

    var prezzoScontato;

    var numeroCarozza = Math.ceil(Math.random() * 10);
    var codiceCP = Math.floor(Math.random() * (100000 - 90000 + 1) + 90000)

    if (sesso === "minorenne") {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 2);
        document.getElementById("offerta").innerHTML = "Sconto Minori";

    } else if (sesso === "over65") {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 4);
        document.getElementById("offerta").innerHTML = "Sconto Over 65";

    } else if (sesso === "maggiorenne") {
        prezzoScontato = prezzoBiglietto;
    }


    document.getElementById("nomepasseggero").innerHTML = nomeUtente;
    document.getElementById("carozza").innerHTML = numeroCarozza;
    document.getElementById("codiceCP").innerHTML = codiceCP;
    document.getElementById("costoBiglietto").innerHTML = prezzoScontato.toFixed(2);





}


function s2() {
    var nomeUtente = document.getElementById("myInput").value = "";
    var distanzaKm = document.getElementById("myInput2").value = "";

}