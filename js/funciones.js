
        // variables de estadisticas
        var tiradas = 0;
        var ganadas = 0;
        var empatadas = 0;
        var perdidas = 0;

        function aleatorio(a, b){
            // asegurar que son enteros
            a = parseInt(a,10)
            b = parseInt(b, 10)

            return Math.floor(Math.random()*(b-a+1))+a;
        }
        
        function tirada(jugador) {
            // opciones posibles
            var opciones = ["piedra", "papel", "tijera"];

             // tirada CPU
            var cpu = opciones[aleatorio(0, 2)];

            // cambiar imagen jugador
            document.getElementById("imgJugador").src = "imagenes/" + jugador + ".jpg";
        
            // cambiar imagen CPU
            document.getElementById("imgCPU").src = "imagenes/" + cpu + ".jpg";

            // determinar resultado
                var resultado = "";

                // tirada jugador
                if (jugador === cpu) {
                    // empate
                    outResultado.innerText = "HAS EMPATADO"
                    empatadas++;
                    

                // sino gana
                } else if (
                    (jugador === 'piedra' && cpu === 'tijera') ||
                    (jugador === 'papel' && cpu === 'piedra') ||
                    (jugador === 'tijera' && cpu === 'papel')
                ) { 
                    outResultado.innerText = "HAS GANADO";
                    ganadas++;
                    }
                
                // SINO pierde
                else {
                    outResultado.innerText = "HAS PERDIDO";
                    perdidas++;
                    
                }

            // incrementar partidas
            tiradas++;
            
            // Actualizar las estadisticas
            document.getElementById("inPartidas").innerText = tiradas;
            document.getElementById("inGanadas").innerText = ganadas;
            document.getElementById("inPerdidas").innerText = perdidas;
            document.getElementById("inEmpatadas").innerText = empatadas;
                    
    }

        // reiniciar
        function reinicia() {
            tiradas = 0;
            ganadas = 0;
            perdidas = 0;
            empatadas = 0;
            
            // reiniciar Estadisticas
            outResultado.innerText = "Elige tu jugada";
            
            // Reinicio de imágenes
            document.getElementById("imgJugador").src = "imagenes/piedra.jpg";
            document.getElementById("imgCPU").src = "imagenes/tijera.jpg";

            // reiniciar las estadisticas
            document.getElementById("inPartidas").innerText = tiradas;
            document.getElementById("inGanadas").innerText = ganadas;
            document.getElementById("inPerdidas").innerText = perdidas;
            document.getElementById("inEmpatadas").innerText = empatadas;
        }
