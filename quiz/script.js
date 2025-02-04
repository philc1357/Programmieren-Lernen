var fragen = [];  
var richtige_antwort = [];  
var gesperrt = true;
var punkte = 0;
var runden = 0;
var fehler = 0;
var timer = 8;
var id;

//beim klicken auf die Ameise
function start() {
    document.getElementById("img_start").style.display = "none";
    document.getElementById("display_quiz").style.opacity = 1;
    document.getElementById("ergebnis").style.opacity = 1;
    document.getElementById("display_regeln").style.opacity = 1;
    document.getElementById("btn_weiter").style.opacity = 0;
}

//Alle Fragen
var fragen = [
    "Wie viele Beine hat eine Ameise?#4#6#8#2",
    "Wie nennt man die Königin eines Ameisenvolkes?#Drohne#Gyne#Gunne#2",
    "Welches Organ verwenden Ameisen zum Riechen?#Augen#Fühler#Mund#2",
    "Wie kommunizieren Ameisen miteinander?#Durch Töne#Durch Pheromone#Durch Berührungen#2",
    "Wie nennt man eine Gruppe von Ameisen?#Kolonie#Haufen#Schwarm#1",
    "Wie wird die Königin von Arbeiterameisen versorgt?#Durch die Sonne#Durch Arbeiterameisen#Durch Larven#2",
    "Was passiert, wenn eine Ameise stirbt?#Sie wird beerdigt#Sie wird aus dem Nest getragen#Sie bleibt liegen#2",
    "Wie lange kann eine Ameisenkönigin leben?#5 Jahre#10 Jahre#Bis zu 30 Jahre#3",
    "Welche Ameisenart ist bekannt für ihre aggressiven Raubzüge?#Blattschneiderameisen#Wanderameisen#Holzameisen#2",
    "Welche Rolle spielt die Königin in einem Ameisenstaat?#Sie arbeitet#Sie legt die Eier#Sie verteidigt das Nest#2",
    "Welche Ameisenart ist am weitesten verbreitet?#Feuerameise#Wanderameise#Pharaoameise#3",
    "Welche Ameisenart kann schwimmen?#Feuerameisen#Wanderameisen#Riesenameisen#1",
    "Was ist die größte jemals entdeckte Ameisenart?#Titanameise#Riesenamazone#Gigantameise#1",
    "Wie viele Ameisenarten gibt es weltweit ungefähr?#500#12.000#50.000#2",
    "Wie verteidigen sich Blattschneiderameisen vor Feinden?#Sie beißen mit ihren Mandibeln#Sie fliegen#Sie verwenden Pheromone#1",
    "Wie nennt man Ameisen, die keine Flügel haben?#Arbeiterameisen#Drohnen#Soldaten#1",
    "Wie lange dauert es, bis ein Ameisennest vollständig aufgebaut ist?#Wenige Tage#Ein paar Wochen#Mehrere Monate#3",
    "Welche Funktion haben Ameisenstraßen?#Um Nahrungsquellen zu markieren#Zur Fortpflanzung#Zum Verteidigen#1",
    "Wie nennt man die Phase im Lebenszyklus einer Ameise nach dem Ei?#Larve#Puppe#Imago#1",
    "Welches ist das größte bekannte Ameisennest?#Ein Nest unter einem Baum#Ein Nest im Boden#Über 6.000 Kilometer lang#3",
    "Welche Ameisenart ist dafür bekannt, spezielle Fungizide zur Bekämpfung von Pilzen in ihrem Nest zu produzieren?#Blattschneiderameisen#Süßsammlerameisen#Messorameisen#1",
    "Welche Ameisenart hat die größte Königin mit einer Länge von bis zu 5 cm?#Titanameise#Feuerskorpionameise#Riesenameise#1",
    "Welche chemische Substanz verwenden Ameisen hauptsächlich, um ihre Kolonie zu organisieren und Aufgaben zu verteilen?#Acetylcholin#Pheromone#Serotonin#2",
    "Wie heißt die spezielle Form von Fortpflanzung, die bei einigen Ameisenarten ohne Paarung stattfindet und bei der nur weibliche Nachkommen entstehen?#Parthenogenese#Regeneration#Metamorphose#1",
    "Welche Ameisenart ist als der größte Raubtier-Ameisenstaat bekannt, der oft als 'Löwen der Ameisenwelt' bezeichnet wird?#Wanderameisen#Bulldoggenameisen#Schwarzrote Ameisen#2",
    "Welches interessante Verhalten zeigen Ameisen der Art *Formica rufa* während ihrer Brutpflege?#Sie bauen spezielle Brutkammern#Sie füttern ihre Larven mit einem speziellen Futtersaft#Sie erziehen die Larven zu Soldaten#2",
    "Welche Ameisenart kann durch ihren Biss ein Gift freisetzen, das bei Menschen zu starken Schmerzen und Entzündungen führen kann?#Feuerameise#Bulldoggenameise#Pfeilgiftameise#1",
    "Welche Ameisenart ist bekannt dafür, mit Termiten um Nahrung zu kämpfen und deren Kolonien zu zerstören?#Holzameise#Panzersoldatenameise#Marabu-Ameise#2",
    "Wie lange kann eine Ameisenkönigin der Art *Atta* unter optimalen Bedingungen Eier legen?#1-2 Jahre#10-15 Jahre#30 Jahre#2",
    "Welche Ameisenart ist dafür bekannt, mit Pilzen symbiotisch zusammenzuarbeiten und diese zur Herstellung von Nahrung zu züchten?#Blattschneiderameise#Pharaoameise#Holzameise#1"
];


//array mischen
for ( var i = 0; i <= 30; i++ ) {
    fragen.sort( function(a,b){ return Math.random() - 0.5;} );
}

//beim klicken auf den Button "Start"
function los() { 
    timer = 8;

    let buttons = document.querySelectorAll('.btn_antwort');
    buttons.forEach((button) => {
        button.style.backgroundColor = "white"; // Hintergrundfarbe ändern
        button.style.background = "none"; // Linear-Gradient entfernen
        button.style.boxShadow = "none"; // Box-Shadow entfernen
    });

    //wenn noch nicht mehr als 5 runden gespielt wurde
    if( runden <= 5 ) {

        gesperrt = false;
        runden++;

        //alle hide und shows
        document.getElementById("btn_start").style.opacity = 0;
        document.getElementById("txt_frage").style.opacity = 1;
        document.getElementById("txt_timer").style.opacity = 1;
        document.getElementById("display_regeln").style.opacity = 0;

        //Timer design
        document.getElementById("txt_timer").innerHTML = timer;
        document.getElementById("txt_timer").style.color = "red";
        document.getElementById("txt_timer").style.fontWeight = "bold";
        document.getElementById("txt_timer").style.fontSize = "30px";    

        die_frage = fragen.shift();
        console.log("Frage: " + die_frage);

        var frage_aufbereitet = die_frage.split("#");

        document.getElementById("txt_frage").innerHTML = frage_aufbereitet[0];

        document.getElementById("1").innerHTML = frage_aufbereitet[1];   
        document.getElementById("2").innerHTML = frage_aufbereitet[2];   
        document.getElementById("3").innerHTML = frage_aufbereitet[3];

        richtige_antwort = frage_aufbereitet[4];

        timer--;

        //timer funktion
        var interval = setInterval(function() {
            
            document.getElementById("txt_timer").innerHTML = timer;

            if( timer == 0 ) {

                gesperrt = true;

                clearInterval(interval);
                document.getElementById("txt_timer").innerHTML = "Zeit abgelaufen!";
                document.getElementById("txt_frage").style.opacity = 0;
                document.getElementById("btn_start").style.opacity = 1;
            }
            timer--;
        }, 1000);
    }
}

//beim klicken auf eine antwort
function raten(btn) {

    if( gesperrt ) {
        return;
    }
    gesperrt = true;

    console.log("btn_id: " + btn.getAttribute("id"));
    console.log("richtige_antwort: " + richtige_antwort);

    id = btn.getAttribute("id");
    document.getElementById(id).style.backgroundColor = "yellow";
    document.getElementById(id).style.background = "linear-gradient(160deg, rgba(255, 255, 0, 10%), rgba(233, 233, 0, 100%))";
    document.getElementById(id).style.boxShadow = "5px 5px 5px grey";

    id = btn.getAttribute("id");

    var interval = setInterval(function() {

        console.log("timer: " + timer);

        if( timer == 0 ) {

            if( id == richtige_antwort ) {
                punkte++;
                document.getElementById("punkte").innerHTML = punkte;
                document.getElementById(id).style.backgroundColor = "rgb(196,255,161)";
                document.getElementById(id).style.background = "linear-gradient(160deg, rgba(196,255,161,1) 0%, rgba(66,186,0,1) 100%)";
            }
            else {
                fehler++;
                document.getElementById("fehler").innerHTML = fehler;
                document.getElementById(id).style.backgroundColor = "rgb(255,161,161)";
                document.getElementById(id).style.background = "linear-gradient(160deg, rgba(255,161,161,1) 0%, rgb(230, 0, 0) 100%)";
            }
            gesperrt = true;
            clearInterval(interval);
        }
    }, 1000);    
}