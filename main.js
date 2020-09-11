
function BotarParaMecher() {
    document.getElementById("BotaoMecher").disabled = 'true';
    let Texto = document.getElementById("AreaTexto").value;
    let TempoEntreLetras = document.getElementById("TempoEntreLetras").value;
    let TamanhoDoTexto = Texto.length;
    let ContadorLetra = 0;
    let LetraMaiuscula;
    let TextoAntes;
    let TextoDepois;

    console.log(TempoEntreLetras);
        setInterval(function () {
            if (ContadorLetra < TamanhoDoTexto) {
                ContadorLetra += 1;
            }
            else {
                ContadorLetra = 0;
            }
            TextoAntes = Texto.substring(0, ContadorLetra);
            document.getElementById("TextoMecheAntes").innerHTML = TextoAntes;

            LetraMaiuscula = Texto.charAt(ContadorLetra).toUpperCase()
            document.getElementById("LetraMaiusculaVermelha").innerHTML = LetraMaiuscula;

            TextoDepois = Texto.substring(TamanhoDoTexto, ContadorLetra + 1);
            document.getElementById("TextoMecheDepois").innerHTML = TextoDepois;
        }, TempoEntreLetras);
}

