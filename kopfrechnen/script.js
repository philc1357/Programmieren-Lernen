let ergebnis;
let runde = 0;
let punkte = 0;
let level = 1;

function los() {

    runde++;

    let rndm_zahl1 = Math.floor(Math.random() * 10) + 1;
    let rndm_zahl2 = Math.floor(Math.random() * 10) + 1;
    let operation = Math.floor(Math.random() * 4);

    do {
        switch( operation ) {
            case 0:
                operation = "+";
                ergebnis = rndm_zahl1 + rndm_zahl2;
                break;
            case 1:
                operation = "-";
                ergebnis = rndm_zahl1 - rndm_zahl2;
                break;
            case 2:
                operation = "*";
                ergebnis = rndm_zahl1 * rndm_zahl2;
                break;
            case 3:
                operation = "/";
                ergebnis = rndm_zahl1 / rndm_zahl2;
                break;
        }
    }
    while( ergebnis < 0)

    document.getElementById("question").innerHTML = rndm_zahl1 + " " + operation + " " + rndm_zahl2 + " = ";
    return ergebnis;
}

function raten() {
    let eingabe = document.getElementById("eingabe").value;
    if( ergebnis == eingabe ) {
        punkte++;
        document.getElementById("antwort").innerHTML = "Richtig! Punkte: " + punkte;
    }
    
}