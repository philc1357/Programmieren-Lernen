var zahl1 = Math.round(Math.random() * 9);
var zahl2 = Math.round(Math.random() * 9);
var zahl3 = Math.round(Math.random() * 9);
var zahl4 = Math.round(Math.random() * 9);
var zahl5 = Math.round(Math.random() * 9);

while(zahl2 == zahl1) {
    zahl2 = Math.round(Math.random() * 9);
}

while(zahl3 == zahl2 || zahl3 == zahl1) {
    zahl3 = Math.round(Math.random() * 9);
}

while(zahl4 == zahl3 || zahl4 == zahl2 || zahl4 == zahl1) {
    zahl4 = Math.round(Math.random() * 9);
}

while(zahl5 == zahl4 || zahl5 == zahl3 || zahl5 == zahl2 || zahl5 == zahl1) {
    zahl4 = Math.round(Math.random() * 9);
}

console.log("Zahl 1: " + zahl1);
console.log("Zahl 2: " + zahl2);
console.log("Zahl 3: " + zahl3);
console.log("Zahl 4: " + zahl4);
console.log("Zahl 5: " + zahl5);

var versuche = 0;

// document.getElementById("code").innerHTML = `${zahl1} ${zahl2} ${zahl3}`;

function start() {
    document.getElementById("display_main").style.opacity = 1;
}

function raten(event) {

    // Standardverhalten des Formulars verhindern
    event.preventDefault();

    var richtige_stellen = 0, richtige_zahlen = 0;

    versuche++;
    document.getElementById("txt_versuche").innerHTML = "Versuche: " + versuche;

    //eingegebene Zahl aus dem input-Feld holen
    var eingegebene_zahl = document.getElementById("eingabe").value;

    //Zahl in einzelne Variablen speichern
    var tip1 = eingegebene_zahl.charAt(0);
    var tip2 = eingegebene_zahl.charAt(1);
    var tip3 = eingegebene_zahl.charAt(2);
    var tip4 = eingegebene_zahl.charAt(3);
    var tip5 = eingegebene_zahl.charAt(4);

    console.log("tip1: " + tip1);
    console.log("tip2: " + tip2);
    console.log("tip3: " + tip3);
    console.log("tip4: " + tip4);
    console.log("tip5: " + tip5);

    //prüfen ob die erste Zahl vorkommt
    if(tip1 == zahl1) {
        richtige_stellen++;               
    }
    else if(tip1 == zahl2 || tip1 == zahl3 || tip1 == zahl4 || tip1 == zahl5) {
        richtige_zahlen++;
    }

    //prüfen ob die zweite Zahl vorkommt
    if(tip2 == zahl2) {
        richtige_stellen++;
    }
    else if(tip2 == zahl1 || tip2 == zahl3 || tip2 == zahl4 || tip2 == zahl5) {       
        richtige_zahlen++;
    }

    //prüfen ob die dritte Zahl vorkommt
    if(tip3 == zahl3) {
        richtige_stellen++;
    }
    else if(tip3 == zahl2 || tip3 == zahl1 || tip3 == zahl4 || tip3 == zahl5) {       
        richtige_zahlen++;
    }

    //prüfen ob die vierte Zahl vorkommt
    if(tip4 == zahl4) {
        richtige_stellen++;
    }
    else if(tip4 == zahl2 || tip4 == zahl1 || tip4 == zahl3 || tip4 == zahl5) {       
        richtige_zahlen++;
    }

    //prüfen ob die fünfte Zahl vorkommt
    if(tip5 == zahl5) {
        richtige_stellen++;
    }
    else if(tip5 == zahl2 || tip5 == zahl1 || tip5 == zahl4 || tip5 == zahl3) {       
        richtige_zahlen++;
    }

    if(richtige_stellen == 5) {
        alert("Sie haben gewonnen!");
    }

    document.getElementById("txt_richtige_zahlen").innerHTML = richtige_zahlen + " der geratenen Zahlen kommen im Code vor.";
    document.getElementById("txt_richtige_stellen").innerHTML = richtige_stellen + " der geratenen Zahlen kommen an richtiger Stelle vor.";
}

function reset_stellen() {
    document.getElementById("txt_richtige_stellen").innerHTML = "0 der geratenen Zahlen kommen an richtiger Stelle vor.";
}

function reset_zahlen() {
    document.getElementById("txt_richtige_zahlen").innerHTML = "0 der geratenen Zahlen kommen im Code vor.";
}

function neustart() {
    document.getElementById("code").innerHTML = "";
    document.getElementById("txt_code").innerHTML = "";
    document.getElementById("eingabe").value = "";
    reset_zahlen();
    reset_stellen();


    versuche = 0;
    document.getElementById("txt_versuche").innerHTML = "Versuche: " + versuche;

    var zahl1 = Math.round(Math.random() * 9);
    var zahl2 = Math.round(Math.random() * 9);
    var zahl3 = Math.round(Math.random() * 9);
    var zahl4 = Math.round(Math.random() * 9);
    var zahl4 = Math.round(Math.random() * 9);

    console.log("Zahl 1: " + zahl1);
    console.log("Zahl 2: " + zahl2);
    console.log("Zahl 3: " + zahl3);
    console.log("Zahl 4: " + zahl4);
    console.log("Zahl 5: " + zahl5);

    // document.getElementById("code").innerHTML = `${zahl1} ${zahl2} ${zahl3}`;

    let inputs = document.getElementsByClassName("input_notizen");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

}

function aufgeben() {
    document.getElementById("eingabe").value = "";
    reset_zahlen();
    reset_stellen();

    document.getElementById("code").innerHTML = `${zahl1} ${zahl2} ${zahl3} ${zahl4} ${zahl5}`;
    document.getElementById("txt_code").innerHTML = "Du hast aufgegeben. Der Code lautet: ";

    versuche = 0;
    document.getElementById("txt_versuche").innerHTML = "Versuche: " + versuche;

    let inputs = document.getElementsByClassName("input_notizen");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}