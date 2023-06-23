const fnValidar04 = () => {

    var elementoPrefer = document.getElementsByName("chkPre[]");
    var contador = 0;
    for(var i=0; i<elementoPrefer.length; i++) {
        if(elementoPrefer[i].checked) {
            contador++;
        }
    }

    if(contador !=2){
        alert("DEBE ELEGIR 2 OPCIONE.... NO ("+ contador +") opciones");
        return false;
    }
}