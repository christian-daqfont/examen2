var txt = document.getElementById("texto");
var desc = document.getElementById("descripcion");

function registrar(){
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    var fila = document.createElement("tr");
    
    var celda_texto = document.createElement("td");
    celda_texto.innerHTML= txt.value;
  
    var celda_descripcion = document.createElement("td");
    celda_descripcion.innerHTML= desc.value;

    var celda_editar = document.createElement("td");
    celda_editar.innerHTML="<a href='#' class='icono2 '><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>";
   
    var celda_eliminar = document.createElement("td");
    celda_eliminar.innerHTML="<a href='#' class='icono1'><i class='fa fa-trash' aria-hidden='true'></i></a>";
    
    fila.appendChild(celda_texto);
    fila.appendChild(celda_descripcion);
    fila.appendChild(celda_editar);
    fila.appendChild(celda_eliminar);
    tbody.appendChild(fila);
    table.appendChild(tbody);
    limpiar();
    
}

function limpiar(){
    txt.value="";
    desc.value="";
    nom.focus="";
}