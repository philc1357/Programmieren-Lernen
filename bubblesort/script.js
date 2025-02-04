// Array erstellen
var unordered_list = [];

function eintragen(event) {

    // Standardverhalten des Formulars verhindern
    event.preventDefault();

    // Text aus dem Input-Feld holen
    var text = document.getElementById("txt_input").value.trim();

    console.log("Eingegebener Text: " + text);

    // Text dem Array hinzufügen
    unordered_list.push(text);

    // Array anzeigen
    console.log(unordered_list);

    // Input-Feld leeren
    document.getElementById("txt_input").value = "";

    console.log("Listenlänge: " + unordered_list.length);

    // Nur den neuen Text als <li> hinzufügen
    var li = document.createElement("li");
    document.getElementById("display_array").appendChild(li);

    var textnode = document.createTextNode(text);
    li.appendChild(textnode);
}

function sortieren() {
    
    //Liste sortieren
    unordered_list.sort();
    console.log(unordered_list);

    for (var i = 0; i < unordered_list.length; i++) {
        var li = document.createElement("li");
        document.getElementById("display_sort").appendChild(li);
        var textnode = document.createTextNode(unordered_list[i]);
        li.appendChild(textnode);
    }
}