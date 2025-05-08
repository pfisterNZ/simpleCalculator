
/// Funcion para copiar a portapapeles el valor del input
function copiar(){
    const text = document.getElementById("text").value;
    navigator.clipboard.writeText(text);
}

document.getElementById("copiarBTN").addEventListener("click", copiar);


function calcular(){
    const text = document.getElementById("text").value;
    const resultado = eval(text);
    document.getElementById("text").value = resultado;
}

function borrar(){
    document.getElementById("text").value = "";
}

document.getElementById("borrarBTN").addEventListener("click", borrar);


function agregar(valor){
    document.getElementById("text").value += valor;
}

document.getElementById("borrarBTN").addEventListener("click", borrar);




