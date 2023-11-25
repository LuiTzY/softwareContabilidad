/*Agregar to do list para crear las subcuentas*/ //Listo
/* Desarrollar funcion que crea las cuentas evaluadno los parametros que se le pase*/ //Listo

/* Hacer funcion toggle para ver las subcuentas dentro de la cuenta*/

/*Funcion para eliminar cuentas */
/*Renombrar nombre cuenta funcion */ 
/*Opcion para ver los detalles de la cuenta */

// HACER VALIDACION CORRECTA PARA QUE SOLO SEA UN POST A LA BASE DE DATOS   

// Dashboard de las cuentas debe tener un formulario para buscar la cuenta y presentar losdatos


// Objeto donde se guardan los datos de la cuenta
var created_account = {};

// Array para agregar todas las cuentas creadas
var accounts = [];

// Obtener id del formulario 
var account_form = document.getElementById('form-Account');

var accountSectionType = "";



// Validacion de caracteres raros y numeros para los inputs
document.getElementById('account_name').addEventListener('input', function() {
  this.value = this.value.replace(/[^A-Za-z\s]/g, '');

});

document.getElementById('account_description').addEventListener('input', function() {
  this.value = this.value.replace(/[^A-Za-z\s]/g, '');

});
function insertAccountCreated(nombre){

    //Agregar la cuenta creada en el html
    var ul = document.getElementsByClassName(nombre)[0];
  
    var lista = document.createElement("li");
    var nuevoli = document.createTextNode(created_account.account_name);
    lista.appendChild(nuevoli)
    ul.appendChild(lista);
}
// Funcion para crear una nueva cuenta
function newAccount(){
  
    //Permite que el formulario no se renviee al hacer un submit
    event.preventDefault()

    //Obtener id de los datos de las cuentas
    var account_name = document.getElementById("account_name");
    var account_type = document.getElementById("account_type").value;    
    var account_description = document.getElementById("account_description");

        /*validar inputs account-name y account-description */
        if (!account_name.checkValidity() || account_name.value.trim("") == "" ){
            console.log("El campo del nombre esta incorrecto, por favor resolver")
            account_name.focus();
        }

        else if (!account_description.checkValidity() || account_description.value.trim("") == ""){
            console.log("El campo de la descripcion esta incorrecto, por favor resolver")
            account_description.focus();
        }
        else {
            // Almacenar datos de la cuenta ya validados en el objeto created_account
            created_account.account_name = account_name.value;
            created_account.account_description = account_description.value;
            created_account.account_type = account_type;
            created_account.id_account = generarNumeroDeCuenta();
            
            // Almacenar datos de la cuenta en una array
            accounts.push(created_account);

          
            
            if (accountSectionType === "activos-account"){
              insertAccountCreated("account-created activos");
            }
            else if (accountSectionType === "patrimonio-account"){
             insertAccountCreated("account-created patrimonio")

            }
            else if (accountSectionType === "ingresos-account"){
             insertAccountCreated("account-created ingresos")

            }
            else if (accountSectionType === "egresos-account"){
              insertAccountCreated("account-created egresos")

            }
            else if (accountSectionType === "transferencias-account"){
             insertAccountCreated("account-created transferencias")

            }
            // Cerrar formulario al ser enviado
            account_form.style.display = 'none'
            
            
        }
}

// Evento submit para el formulario de las cuentas
account_form.addEventListener('submit', function (event) {
    event.preventDefault();
    newAccount();
});

//Funcion para generar un numero de cuenta aleatorio
function generarNumeroDeCuenta() {
    let numeroAleatorio = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    let numeroDeCuenta = String(numeroAleatorio);
    return numeroDeCuenta;
  }
  
var dropdown_menu = document.getElementsByClassName("dropdown-menu");
var account_form = document.getElementById("form-Account");
console.log(dropdown_menu.parentElement)


/*Recorrer los elementos dropdown para asi determinar cual id es seleccionado al hacer click para realizar una accion*/
for (var i = 0  ; i < dropdown_menu.length; i++) {
      dropdown_menu[i].addEventListener('click', function(event) {

        // Obtener id del elemento seleccionado
        let id_seleccionado = event.target.id;
        let liparentElement =  event.target.parentElement.parentElement.id;
        
        //Validar id clickado
          if (id_seleccionado === "createAccount"){
            account_form.style.display = 'block';
            accountSectionType = liparentElement
            console.log(accountSectionType)
          }

          if (id_seleccionado === "editAccount"){
            console.log("Editaras la cuenta")
          }

          if (id_seleccionado === "detailsAccount"){
            console.log("Estos son los detalles de la cuenta")
          }

          if (id_seleccionado === "deleteAccount"){

            console.log("La cuenta sera eliminada",event.target)
          }
      });
  }

// Obtener id del btn del form
var closebtn = document.getElementsByClassName("btn-close")
//Funcion para cerrar el formulario
function closeButtonForm (){
  account_form.style.display = 'none';
}

console.log(dropdown_menu)