var body = document.body;
var divTabla = document.createElement('div')
body.appendChild(divTabla)
const saltoLinea = () =>{
  var br = document.createElement('br')
  body.appendChild(br)
}
const limpiarTabla = () =>{
  divTabla.innerHTML = ''
}
const array = [
  { 
    nombre: "Cristian",
    apellido: "Alvarez",
    edad: 35,
    sueldo: 1000000,
  },
];
const dibujarTabla = () =>{
  var tabla = document.createElement('table')
  tabla.setAttribute('border',1)
  var fila = document.createElement('tr')
  var celda = document.createElement('td')
  celda.innerHTML = 'Nombre'
  fila.appendChild(celda)
  var celda = document.createElement('td')
  celda.innerHTML= 'Apellido'
  fila.appendChild(celda)
  var celda = document.createElement('td')
  celda.innerHTML = 'Edad'
  fila.appendChild(celda)
  var celda = document.createElement('td')
  celda.innerHTML = 'Sueldo'
  fila.appendChild(celda)
  var celda = document.createElement('td')
  tabla.appendChild(fila)
  var celda = document.createElement('td')
  celda.innerHTML = 'Suma total'
  fila.appendChild(celda)
  var celda = document.createElement('td')
  //var i = 0;
  array.forEach(arr =>{
    var fila = document.createElement('tr')
    var celda = document.createElement('td')
    celda.innerHTML = arr.nombre
    fila.appendChild(celda)
    var celda = document.createElement('td')
    celda.innerHTML= arr.apellido
    fila.appendChild(celda)
    var celda = document.createElement('td')
    celda.innerHTML = arr.edad
    fila.appendChild(celda)
    var celda = document.createElement('td')
    celda.innerHTML = arr.sueldo
    fila.appendChild(celda)
    var celda = document.createElement('td')
    tabla.appendChild(fila)
    divTabla.appendChild(tabla)
    //i++
  })
}
dibujarTabla()
saltoLinea()
var inputNombre = document.createElement('input')
inputNombre.setAttribute('type','text')
inputNombre.setAttribute('placeholder','Ingrese el Nombre')
inputNombre.id = 'inputNombre'
body.appendChild(inputNombre)
var inputApellido = document.createElement('input')
inputApellido.setAttribute('type','text')
inputApellido.setAttribute('placeholder','Ingrese el Apellido')
inputApellido.id = 'inputApellido'
body.appendChild(inputApellido)
var inputEdad = document.createElement('input')
inputEdad.setAttribute('type','number')
inputEdad.setAttribute('placeholder','Ingrese la Edad')
inputEdad.id = 'inputEdad'
body.appendChild(inputEdad)
saltoLinea()
var inputSueldo = document.createElement('input')
inputSueldo.setAttribute('type','number')
inputSueldo.setAttribute('placeholder','Ingrese el Sueldo')
inputSueldo.id = 'inputSueldo'
body.appendChild(inputSueldo)
saltoLinea()
/*var inputFinal = () =>{
    resultado = parseFloat(((input.nota1+input.nota2+input.nota3)/3)*0.6)+(input.notaExamen*0.4)
    input_res.value = resultado
    }*/
var botonAgregar = document.createElement('button')
botonAgregar.innerText = 'Agregar'
botonAgregar.onclick = () => agregarNombre()
body.appendChild(botonAgregar)
saltoLinea()
var botonEliminaUltimo = document.createElement('button')
botonEliminaUltimo.innerText = 'Eliminar Ultimo'
botonEliminaUltimo.onclick = () => eliminaUltimo()
body.appendChild(botonEliminaUltimo)
saltoLinea()
const agregarNombre = () =>{
  array.push({
    nombre: document.getElementById('inputNombre').value,
    apellido: document.getElementById('inputApellido').value,
    edad:document.getElementById('inputEdad').value,
    sueldo:document.getElementById('inputSueldo').value,
    nota3:document.getElementById('inputNota3').value,
    notaExamen:document.getElementById('inputNotaExamen').value,
    //final:document.getElementById('inputFinal').value,
  })
  limpiarInputs()
  limpiarTabla()
  dibujarTabla()
}
const limpiarInputs = () =>{
  inputs = document.querySelectorAll('input')
  inputs.forEach(input=>{
    input.value = ''
  })
}
const eliminarNombre = (posicion) =>{
  var eliminar = -1
  for (let i=0; i< array.length; ++i)
  {
    if(array[i].id === posicion ){
      eliminar = i
    }

  }
}
const eliminaUltimo = () =>{
  array.pop()
  limpiarTabla()
  dibujarTabla()
}