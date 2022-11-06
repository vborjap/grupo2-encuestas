let inicio = '<div class="p-6 my-3">';
let final = "</div>"; 
<<<<<<< HEAD
let hora = '<input type="time" name="respuesta" value="00:00:00" />';
let fecha = '<input type="date" name="respuesta" min="2020-07-22" max="" value="2021-07-22" />';
let rCorta = '<input class="p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuesta" placeholder="Respuesta corta" readonly>';
let rLarga = '<textarea class="p-2 border block wn-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuesta" placeholder="Respuesta larga" ></textarea>';
let oUnica = '<div id="radio"><div class="cursor-pointer inline-block px-3 py-2 bg-blue-500 text-white rounded shadow" onclick="resetRadio()">'
//+' <button class="btn btn-primary btn-block">Reset</button>'
+'</div><div class="cursor-pointer inline-block px-3 py-2 ml-5 bg-green-500 text-white rounded shadow" onclick="insertRadio()">'
+'<button class="btn btn-outline-secondary">Agregar opción</button>'
+'</div><div class="my-3 flex g-1"><input type="radio" value="valor" name="respuesta" />'
 +'<input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></div>'
 +'<div class="my-3 flex g-1"><input type="radio" value="valor" name="respuesta" /><input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></div>'
 +'</div>';

 let oMultiple = '<div id="check"> <div class="cursor-pointer inline-block px-3 py-2 bg-blue-500 text-white rounded shadow" onclick="resetRadio2()">'
// +'<button class="btn btn-warning btn-block">Reset</button>'
 +'</div><div class="cursor-pointer inline-block px-3 py-2 ml-5 bg-green-500 text-white rounded shadow" onclick="insertRadio2()">'
 +'<button class="btn btn-outline-secondary">Agregar opción</button></div>'
+'<div class="my-3 flex g-1"><input type="checkbox"  value="valor" name="respuesta" />'
+'<input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></input>'
+'</div><div class="my-3 flex g-1"><input type="checkbox"  value="valor" name="respuesta" />'
+'<input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></input>'
=======
let hora = '<input class="form-control" type="time" name="respuesta" value="00:00:00" />';
let fecha = '<input class="form-control" type="date" name="respuesta" min="2020-07-22" max="" value="2021-07-22" />';
let rCorta = '<input class="form-control" type="text" name="respuesta" placeholder="Respuesta corta">';
let rLarga = '<textarea class="form-control" name="respuesta" placeholder="Respuesta larga" ></textarea>';

let oUnica = '<div id="radio" class="px-3"><div class=" px-3 py-2" onclick="resetRadio()"> <button class="btn btn-primary btn-block">Reset</button></div><div class="px-3 py-2 ml-5" onclick="insertRadio()"><button class="btn btn-primary btn-block">Agregar</button></div><div class="my-3 d-flex g-1"><input class="me-3" type="radio" value="valor" name="respuesta" />'
 +'<input class="form-control" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></div><div class="my-3 d-flex g-1"><input class="me-3" type="radio" value="valor" name="respuesta" /><input class="form-control" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></div></div>';
let oMultiple = '<div id="check" class="px-3"> <div class="px-3 py-2 " onclick="resetRadio2()"> <button class="btn btn-warning btn-block">Reset</button></div><div class="px-3 py-2 ml-5" onclick="insertRadio2()"><button class="btn btn-primary btn-block">Agregar</button></div>'
+'<div class="my-3 d-flex g-1"><input class="me-3" type="checkbox"  value="valor" name="respuesta" />'
+'<input class="form-control" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></input>'
+'</div><div class="my-3 d-flex g-1"><input class="me-3" type="checkbox"  value="valor" name="respuesta" />'
+'<input class="form-control" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></input>'
>>>>>>> main
+'</div></div>';

function cambiarPregunta(e) {
    let el = document.getElementById("RDOM");
    if(e.value == "opcion-unica") {
        el.innerHTML = inicio + oUnica + final;
    }

    if(e.value == "opcion-multiple") {
        el.innerHTML = inicio + oMultiple + final;
    }

    if(e.value == "*") {
        el.innerHTML = "";
    }
}


function resetRadio () {
    let radio = document.querySelectorAll('input[name="respuesta"]');
    console.log(radio, radio.item);
    for(let i=0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}

function insertRadio() {
    let radioPlace = document.getElementById("radio");
    let num = document.querySelectorAll('input[name="respuesta"]').length;
<<<<<<< HEAD
    radioPlace.innerHTML += '<div id="radio-d-' + num + '" class="my-3 flex"><input type="radio" value="" name="respuesta" />' +
    '<input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText[]" placeholder="Valor del radiobutton" ><div class="cursor-pointer inline-block px-3 py-2 ml-5 bg-red-500 text-white rounded shadow" onclick="deleteRadio(\'radio-d-' + num + '\')"><button class="btn btn-outline-danger">Borrar</button></div></div>';
=======
    radioPlace.innerHTML += '<div id="radio-d-' + num + '" class="my-3 d-flex p-1"><input class="me-3" type="radio" value="" name="respuesta" />' +
    '<input class="form-control" type="text" name="respuestaText[]" placeholder="Valor del radiobutton" ><div class="px-3" onclick="deleteRadio(\'radio-d-' + num + '\')"><button class="btn btn-danger btn-block">Borrar</button></div></div>';
>>>>>>> main
}

function deleteRadio(e) {
    console.log(e);
    document.getElementById(e).remove();
}

//--------------------------------------------------------------------------------
function resetRadio2 () {
    let radio = document.querySelectorAll('input[name="respuesta"]');
    console.log(radio, radio.item);
    for(let i=0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}

function insertRadio2() {
    let radioPlace = document.getElementById("check");
    let num = document.querySelectorAll('input[name="respuesta"]').length;
<<<<<<< HEAD
    radioPlace.innerHTML += '<div id="radio-d-' + num + '" class="my-3 flex"><input type="checkbox" value="" name="respuesta" />' +
    '<input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText[]" placeholder="Valor del radiobutton" ><div class="cursor-pointer inline-block px-3 py-2 ml-5 bg-red-500 text-white rounded shadow" onclick="deleteRadio2(\'radio-d-' + num + '\')"><button class="btn btn-outline-danger">Borrar</button></div></div>';
=======
    radioPlace.innerHTML += '<div id="radio-d-' + num + '" class="my-3 d-flex g-1"><input class="me-3" type="checkbox" value="" name="respuesta" />' +
    '<input class="form-control" type="text" name="respuestaText[]" placeholder="Valor del radiobutton" ><div class="px-3" onclick="deleteRadio2(\'radio-d-' + num + '\')"><button class="btn btn-danger btn-block">Borrar</button></div></div>';
>>>>>>> main
}

function deleteRadio2(e) {
    console.log(e);
    document.getElementById(e).remove();
}