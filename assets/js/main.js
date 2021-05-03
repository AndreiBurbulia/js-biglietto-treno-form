


function s1() {
    var nomeUtente = document.getElementById("myInput").value;
    var distanzaKm = document.getElementById("myInput2").value;
    var sesso = document.getElementById("sesso").value;
    console.log(nomeUtente, distanzaKm, sesso);

    var prezzoBiglietto = distanzaKm * 0.21;
    console.log(prezzoBiglietto);

    var prezzoScontato;

    if (sesso === "minorenne") {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 2);
    } else if (sesso === "over65") {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 4);
    } else if (sesso === "maggiorenne") {
        prezzoScontato = prezzoBiglietto;
    }
    console.log(prezzoScontato);




}
