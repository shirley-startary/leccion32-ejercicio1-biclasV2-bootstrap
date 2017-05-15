  var cerrar=document.getElementsByClassName("cerrar");
var botonRestaurarFotos = document.getElementById("botonRestaurarFotos");
var botonOrigen = document.getElementById("botonOrigen");
var botonExtincion = document.getElementById("botonExtincion");
console.log(botonOrigen);
console.log(botonExtincion);

for(var i=0;i<cerrar.length;i++){
  cerrar[i].addEventListener("click",function(){cerrarImagen(this)});
}
botonRestaurarFotos.addEventListener("click",restaurarFotos);
botonOrigen.addEventListener("click",textoOrigen);
botonExtincion.addEventListener("click",textoExtincion);

function cerrarImagen(elemento){

  var divImagenes =elemento.parentElement ;
  divImagenes.style.display ="none";
  console.log(divImagenes);
}

function restaurarFotos(){
  var divImagenes=document.getElementsByClassName("fotosBiclas");
  console.log(divImagenes);
  for(var j=0;j<divImagenes.length;j++){
    divImagenes[j].style.display = "inline-block"
  }
}

function textoOrigen(){
  var textoOrigen=document.getElementById("textoOrigen");
  if(textoOrigen.style.visibility=="visible"){
    textoOrigen.style.visibility ="hidden";

  }else{
    textoOrigen.style.visibility ="visible";
  }
}
function textoExtincion(){
  var textoExtincion=document.getElementById("textoExtincion");
  if(textoExtincion.style.visibility=="visible"){
    textoExtincion.style.visibility ="hidden";

  }else{
    textoExtincion.style.visibility ="visible";
  }
}
