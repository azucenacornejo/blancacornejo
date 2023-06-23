const fnValidar05 = () => {

    var xTexto = document.getElementById("txtTexto").value;
    if(!(/^\d{3}\s\d{3}\s\d{3}$/.test(xTexto))){
        alert("ESCRIBA 9 NUMEROS AGRUPADOS ENTRE 3 Y SEPARADOS POR UN ESPACIO...");
        return false;
    }

    var xNumero = document.getElementById("txtNumero").value;
    if(!(/^\d{9}$/.test(xNumero))){
        alert("Falta NUMEROs...");
        return false;
    }

    var xFijo = document.getElementById("txtFijo").value;
    if(!(/^05[45]\s\d{6}$/.test(xFijo))) {
        alert("Numero de telefono fijo...");
        return false;
    }

    return true;
    

}