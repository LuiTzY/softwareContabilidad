var client_name = document.getElementById("name").value
console.log(client_name)
function getClientInfo () {

}
var btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    console.log("El boton ha sido clickeado", client_name)
})