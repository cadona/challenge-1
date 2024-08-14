/*
    Seleccion
*/
const botonEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptar");
const textoAviso = document.querySelector(".texto-aviso")
const Resultado = document.querySelector(".evaluar");
const tarjetaContenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const originalText = textoAviso.textContent; // Guardar el texto original

const botonDesencriptar = document.querySelector(".btn-desencriptar");

// Expresión regular para permitir solo letras (mayúsculas y minúsculas)
const regex = /^[a-z]+$/;

/* funcionalidad del boton encriptar*/
botonEncriptar.addEventListener("click",e=>{
    e.preventDefault()
    let texto_Encriptar = textEncriptar.value;
    console.log("valor->"+texto_Encriptar);
    
// Verificar si el texto está vacío o es null
    if (texto_Encriptar === "" || texto_Encriptar === null) {
        textoAviso.textContent="No se permite null";
        setTimeout(()=>{
            textoAviso.textContent=originalText;
            textoAviso.removeAttribute("style");},1500);
    }
    // Verificar si el texto ingresado contiene letras de a-z
    if (!regex.test(texto_Encriptar)) {
        //alert("Por favor, ingresa solo letras.");        
        textoAviso.textContent="Por favor, ingresa solo letras minusculas";
        setTimeout(()=>{
            textoAviso.textContent=originalText;
            textoAviso.removeAttribute("style");},1500);
    }
    //let texto_Normalizado = texto_Encriptar.normalize("NFD").replace("expresion");
    const encryptedText = texto_Encriptar
                                   .replace(/e/gi, 'enter')
                                   .replace(/i/gi, 'imes')
                                   .replace(/a/gi, 'ai')
                                   .replace(/o/gi, 'ober')
                                   .replace(/u/gi, 'ufat');
    console.log(encryptedText);

    Resultado.innerHTML = encryptedText;
    tarjetaContenido.remove();
    btnCopiar.style.visibility = "inherit";
});

/* Funcionalid del boton desencriptar*/
botonDesencriptar.addEventListener("click",e=>{
    e.preventDefault()
    let texto_Encriptar = textEncriptar.value;
    console.log("valor Encriptado->"+texto_Encriptar);
    
// Verificar si el texto está vacío o es null
    if (texto_Encriptar === "" || texto_Encriptar === null) {
        textoAviso.textContent="No se permite null";
        setTimeout(()=>{
            textoAviso.textContent=originalText;
            textoAviso.removeAttribute("style");},1500);
    }
    // Verificar si el texto ingresado contiene letras de a-z
    if (!regex.test(texto_Encriptar)) {
        //alert("Por favor, ingresa solo letras.");        
        textoAviso.textContent="Por favor, ingresa solo letras minusculas";
        setTimeout(()=>{
            textoAviso.textContent=originalText;
            textoAviso.removeAttribute("style");},1500);
    }
    //let texto_Normalizado = texto_Encriptar.normalize("NFD").replace("expresion");
    const encryptedText = texto_Encriptar
                                   .replace(/enter/gi, 'e')
                                   .replace(/imes/gi, 'i')
                                   .replace(/ai/gi, 'a')
                                   .replace(/ober/gi, 'o')
                                   .replace(/ufat/gi, 'u');
    console.log(encryptedText);

    Resultado.innerHTML = encryptedText;
    tarjetaContenido.remove();
    btnCopiar.style.visibility = "inherit";
});
    /* copia contenido al portapeles*/
    btnCopiar.addEventListener("click",e=>{
        e.preventDefault()
        let copiar = Resultado;
        copiar.select();
        document.execCommand("copy");
        btnCopiar.style.visibility = 'none';
    });    