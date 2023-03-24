let pets = []; //arreglo vacio
//crear constructor
class Pet {
    constructor(nombreP, generoP, razaP, edadP, consultap, direccionP, telefonoP) {
        this.Nombre = nombreP;
        this.Genero = generoP;
        this.Raza = razaP;
        this.Edad = edadP;
        this.consulta = consultap;
        this.direccion = direccionP;
        this.telefono = telefonoP;
    }
}
// variables 
// valores de los inputs
let inputNombre = document.getElementById("txtNombre");
let inputGenero = document.getElementById("txtGenero");
let inputRaza = document.getElementById("txtRaza");
let inputEdad = document.getElementById("selEdad");
let inputConsulta = document.getElementById("txtConsulta");
let inputDireccion = document.getElementById("txtDireccion");
let inputTelefono = document.getElementById("txtTelefono");
//funcion valida
function validacion(pet) {
    let valida = true; 
    if (pets.nombre == "") { 
        alert("Ingresa Nombre");
        inputNombre.classList.add = ("error");
        valida = false;
    }return valida;
}
    if (pets.genero== "") { 
        inputGenero.classList.add("error");
        valida = false;
    }
// function de registro
function registro() {
    console.log("Registrando mascota...");
    // objeto
    let newPet = new Pet(inputNombre.value,
         inputGenero.value, 
         inputRaza.value, 
         inputEdad.value,
         inputConsulta.value, 
         inputDireccion.value,
         inputTelefono.value,);

    if (validacion(newPet) == true) {
        //imprimir el objeto en consola
        console.log(newPet);
        pets.push(newPet);
        displayCards();
        limpiarForm();
    }
}
function limpiarForm() {
    inputNombre.value = "";
    inputGenero.value = "";
    inputRaza.value = "";
    inputEdad.value = "";
    inputConsulta.value = "";
    inputDireccion.value = "";
    inputTelefono.value = "";
}
function init() {
    console.log("Register");
        displayCards();
}
window.onload = init;  //ejecuta HTML