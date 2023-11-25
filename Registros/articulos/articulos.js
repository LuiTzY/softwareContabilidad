var codigo_cliente = document.getElementById("codigo").value;
var nombre_cliente = document.getElementById("name").value;
var price = document.getElementById("price").value;
var description = document.getElementById("description").value;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function getClientInfo() {
    event.preventDefault();
   
  if (isNaN(codigo_cliente) || typeof(codigo_cliente) == null || codigo_cliente.trim("") == ""){
        alert("Codigo de cliente invalido");
        return;
  }
  if (!isNaN(nombre_cliente) || typeof(nombre_cliente) == null || nombre_cliente.trim("") == ""){
    alert("Nombre de cliente invalido", nombre_cliente);
    return;
}


}
var btn = document.getElementById("btn");
btn.addEventListener("click", getClientInfo);


function agregarInformacion() {
 
    var codigo_cliente = document.getElementById("codigo").value;
    var nombre_cliente = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("description").value;

    // Crear una nueva fila en la tabla
    var table = document.getElementById('tablaInformacion');
    var newRow = table.insertRow(table.rows.length);

   
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = codigo_cliente;
    cell2.innerHTML = nombre_cliente;
    cell3.innerHTML = "$"+ price;
    cell4.innerHTML = description;
    cell5.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';



    // Limpiar el formulario
    document.getElementById('miFormulario').reset();
}

function eliminarFila(button) {
  // Obtener la fila actual que contiene el botón
  var row = button.parentNode.parentNode;

  // Eliminar la fila
  row.parentNode.removeChild(row);
}