var names = [];

function Add(){

var Caja_nombres = document.getElementById("Caja_nombres").value;

names.push(Caja_nombres);

document.getElementById("Lista").innerHTML = names;
}

function Sort(){

names.sort();

document.getElementById("Lista").innerHTML = names;

}