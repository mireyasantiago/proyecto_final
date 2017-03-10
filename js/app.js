var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    //se manda a llama la variable estudiante que es un arreglo vacio y es global.
  return estudiantes;
}


function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    //Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    /*puse un objeto vacio,donde inserte las propiedades a las cuales transforme
    el nombre en minusculas(toLowerCase),los puntosHSE y puntosTec en numero(parseInt).
    para pedir los datos al usuario utilice prompt*/
     var datoEstudiante={};
       datoEstudiante.nombre= prompt("cual es tu nombre?").toLowerCase();
       datoEstudiante.puntosTec= parseInt(prompt("cuales son tus puntos tecnicos?" ));
       datoEstudiante.puntosHSE= parseInt(prompt("cuales son tus puntos HSE? "));
       estudiantes.push(datoEstudiante);
       console.log(estudiantes);
       return datoEstudiante;
}

function mostrar(datoEstudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    /*llame las propiedades de mi objeto*/
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + datoEstudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + datoEstudiante.puntosTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + datoEstudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
  /*se realiza un for para recorrer el arreglo estudiantes y
  poder concatenar a la lista
  */
   var lista="";

           for(var i=0; i< estudiantes.length;i++){

             lista += mostrar(estudiantes[i]);
           }
           return lista;
console.log(lista);
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
/*busque el objeto solicitado con el metodo filter */

      estudiantes=estudiantes.filter(function (objetoEst){
        return  objetoEst.nombre===estudiantes;

      });
    return estudiantes;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

   estudiantes=estudiantes.sort(function (a,b){
      return  a.puntosTec < b.puntosTec;
   });

   return estudiantes;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
   estudiantes=estudiantes.sort(function (a,b){
     return a.puntosHSE < b.puntosHSE;
   })
   return estudiantes;
}
