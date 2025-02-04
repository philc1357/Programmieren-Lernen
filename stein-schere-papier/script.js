        //Variablen
        var hand_pc;
        var hand_spieler = 0;
        var punkte_spieler = 0;
        var punkte_gegner = 0;
        var hand_pc;

        //Randomzahl für PC generieren
        hand_pc = Math.floor(Math.random() * 3 + 1);
        console.log("hand_pc = " + hand_pc);

        //Buttons deaktivieren
        document.getElementById("btn_start").disabled = true;
        document.getElementById("btn_neustart").disabled = true;

        //Nicht ausgewählte Hände transparent machen
        function hide(x) {
            document.getElementById("btn_start").disabled = false;
            hand_spieler = x;
            switch(x) {
                case 1:
                    document.getElementById("schere").style.opacity = 1;
                    document.getElementById("stein").style.opacity = 0.3;
                    document.getElementById("papier").style.opacity = 0.3;
                break;

                case 2:
                    document.getElementById("stein").style.opacity = 1;
                    document.getElementById("schere").style.opacity = 0.3;
                    document.getElementById("papier").style.opacity = 0.3;
                break;

                case 3:
                    document.getElementById("papier").style.opacity = 1;
                    document.getElementById("schere").style.opacity = 0.3;
                    document.getElementById("stein").style.opacity = 0.3;
                break;
            }
        }

        function fight() {

                //Randomzahl für PC generieren
            hand_pc = Math.floor(Math.random() * 3 + 1);
            console.log("hand_pc = " + hand_pc);
            console.log("Hand_Spieler = " + hand_spieler);

            //Buttons aktivieren und deaktivieren
            document.getElementById("btn_start").disabled = true;
            document.getElementById("btn_neustart").disabled = false;
            
            //Nicht ausgewählte PC-Hände verstecken
            switch(hand_pc) {
                case 1:
                    document.getElementById("2").style.display = "none";
                    document.getElementById("3").style.display = "none";
                break;

                case 2:
                    document.getElementById("1").style.display = "none";
                    document.getElementById("3").style.display = "none";
                break;

                case 3:
                    document.getElementById("2").style.display = "none";
                    document.getElementById("1").style.display = "none";
                break;
            }

            //Nicht ausgewählte Spieler-Hände verstecken und mittig plazieren
            switch(hand_spieler) {
                case 1:
                    document.getElementById("stein").style.display = "none";
                    document.getElementById("papier").style.display = "none";
                    document.getElementById("schere").style.marginTop = "70px";
                break;

                case 2:
                    document.getElementById("schere").style.display = "none";
                    document.getElementById("papier").style.display = "none";
                    document.getElementById("stein").style.marginTop = "27px";
                break;

                case 3:
                    document.getElementById("schere").style.display = "none";
                    document.getElementById("stein").style.display = "none";
                    document.getElementById("papier").style.marginBottom = "45px";
                break;
            }

            if(hand_spieler == hand_pc) {
                document.getElementById("text_ende").innerHTML = "Unentschieden!";
            }
            //PC gewinnt
            else if(
                (hand_spieler == 1 && hand_pc == 2) ||
                (hand_spieler == 2 && hand_pc == 3) ||
                (hand_spieler == 3 && hand_pc == 1)
            )
            {
                punkte_gegner++;
                document.getElementById("text_ende").innerHTML = "PC gewinnt!";
                document.getElementById("punkte_gegner").innerHTML = punkte_gegner;
            }
            //Spieler gewinnt
            else if(
                (hand_spieler == 1 && hand_pc == 3) ||
                (hand_spieler == 2 && hand_pc == 1) ||
                (hand_spieler == 3 && hand_pc == 2)
            )
            {
                punkte_spieler++;
                document.getElementById("text_ende").innerHTML = "Spieler gewinnt!";
                document.getElementById("punkte_spieler").innerHTML = punkte_spieler;
            }
        }

        function neustart() {
            //Text entfernen
            document.getElementById("text_ende").innerHTML = "";

            //Bilder wieder sichtbar machen und Margin entfernen
            document.getElementById("schere").style.display = "inline";
            document.getElementById("stein").style.display = "inline";
            document.getElementById("papier").style.display = "inline";
            document.getElementById("schere").style.opacity = 1;
            document.getElementById("stein").style.opacity = 1;
            document.getElementById("papier").style.opacity = 1;
            document.getElementById("papier").style.marginBottom = "0px";
            document.getElementById("schere").style.marginTop = "0px";
            document.getElementById("stein").style.marginTop = "0px";
            document.getElementById("1").style.display = "inline";
            document.getElementById("2").style.display = "inline";
            document.getElementById("3").style.display = "inline";

            //Buttons aktivieren
            document.getElementById("btn_start").disabled = false;
        }