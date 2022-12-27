/*  Letra "e" se cambia por "enter"
    Letra "i" se cambia por "imes"
    Letra "a" se cambia por "ai"
    Letra "o" se cambia por "ober"
    Letra "u" se cambia por "ufat"
    
    "enter" remplaza por "e"
    "imes" remplaza por "i"
    "ai" remplaza por "a"
    "ober" remplaza por "o"
    "ufat" remplaza por "u"
    */

var text = document.getElementById("input-text");
text.focus();
function encriptar() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let txtCifrado = texto.replace(/e/img, "enter");
    txtCifrado = txtCifrado.replace(/i/img, "imes");
    txtCifrado = txtCifrado.replace(/a/img, "ai");
    txtCifrado = txtCifrado.replace(/o/img, "ober");
    txtCifrado = txtCifrado.replace(/u/img, "ufat");
    console.log(txtCifrado);

    document.getElementById("ouput-text").innerHTML = txtCifrado;
}

function desencriptar() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let txtDescifrado = texto.replace(/enter/img, "e");
    txtDescifrado = txtDescifrado.replace(/imes/img, "i");
    txtDescifrado = txtDescifrado.replace(/ai/img, "a");
    txtDescifrado = txtDescifrado.replace(/ober/img, "o");
    txtDescifrado = txtDescifrado.replace(/ufat/img, "u");

    document.getElementById("ouput-text").innerHTML = txtDescifrado;
}

function copy() {
    let ouputText = document.getElementById("ouput-text");
    //"Select" selecciona el texto y "setSelectRange" se usa para seleccionar un rango de texto
    ouputText.select();
    ouputText.setSelectionRange(0, 99999);
    //"exetCommand" hace la funcion de copiar el texto
    document.execCommand("copy");
}