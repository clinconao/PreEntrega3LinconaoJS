
class Usuario {
    constructor(nombre, servicio, monto, tasaRetencion, anio, bolsillo){
        this.nombre = nombre
        this.servicio = servicio
        this.monto = monto;
        this.tasaRetencion = tasaRetencion;
        this.anio = anio;
        this.bolsillo = bolsillo;
    }
}

// entrada

const datosForm = document.querySelector('#datosForm')
const nombre = document.querySelector('#nombre')
const servicio = document.querySelector('#servicio')
const monto = document.querySelector('#monto')
const tasaRetencion = document.querySelector('#tasa')
const anio = document.querySelector('#anioservicio')
const calculo = monto / 100 * tasaRetencion
const bolsillo = monto - calculo
const registros = document.querySelector('#registros')

let usuarios = []
const jsonData = localStorage.getItem('usuarios')
if (jsonData) {
    usuarios = JSON.parse(jsonData)
}

actualizar()

// proceso

datosForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const usuario = new Usuario(nombre.value, servicio.value, monto.value, tasaRetencion.value, anio.value, bolsillo.valueOf)
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    actualizar()
    nombre.value = ''
    servicio.value = ''
    monto.value = ''
    tasaRetencion.value = ''
    anio.value = ''
    bolsillo.valueOf = ''
})

// salida

function actualizar() {
    const soloNombre = usuarios.map(u => u.nombre)
    registros.innerHTML = soloNombre.join(',')
}
