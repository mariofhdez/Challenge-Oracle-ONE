function encriptar(){

    var frase = document.getElementById("textoInicial").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoFinal").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("textoFinal").style.alignItems = "flex-start";

}

function desencriptar(){

    var frase = document.getElementById("textoInicial").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoFinal").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("titulo").style.display = "none";
}

function copiar(){
    var contenido = document.querySelector("#textoFinal");
    contenido.select();
    document.execCommand("copy");
}