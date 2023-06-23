function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre == "" || /^\s+$/.test(xNombre)) {
        alert("ESCRIBA NOMBRE");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido == "" || /^\s+$/.test(xApellido)) {
        alert("ESCRIBA APELLIDO");
        return false;
    }

    let xDirección = document.getElementById("txtDireccion").value;
    if (xDirección == "" || /^\s+$/.test(xDirección)) {
        alert("ESCRIBA DIRECCION");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if (xEdad == "" || /^\s+$/.test(xEdad)) {
        alert("INGRESE EDAD");
        return false;
    }

    let xFechadnacimiento = document.getElementById("fecNac").value;
    if (xFechadnacimiento == "" || /^\s+$/.test(xFechadnacimiento)) {
        alert("INGRESE Fecha de nacimiento");
        return false;
    }

    





    

   
    

    return true;
}