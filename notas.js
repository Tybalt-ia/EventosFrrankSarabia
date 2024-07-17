let Notas = [
    {
        id: 0,
        titulo: 'sacar la basura',
        texto: 'mi mama me va a retar si no lo hago',
        realizada: false
    },
    {
        id: 1,
        titulo: 'lavar loza',
        texto: 'se acomularia el desorden',
        realizada: false
    },
    {
        id: 2,
        titulo: 'llamar a mama ',
        texto: 'mi mama me va a enojar si no lo hago',
        realizada: false
    },
    {
        id: 3,
        titulo: 'visitar a mary',
        texto: 'se a sentir si no lo hago',
        realizada: true
    },
]

let idGlobal = 3
function pintarNotas(Notas) {
    let contenedor = document.getElementById("contenedorNotas")
    if (Notas.length == 0) {
        contenedor.innerHTML = "NO HAY NOTAS PARA MOSTRAR"
    } else {
        contenedor.innerHTML = ""
        for (let i = 0; i < Notas.length; i++) {

            let tarjeta = document.createElement('div')
            tarjeta.className = "card m-1 text-center mb-3"
            tarjeta.innerHTML = `
              <div class="card-body">
    <input onClick="marcarRealizada(${Notas[i].id})" type="checkbox"${Notas[i].realizada ? "checked" : ""}>
    <h5 class="card-title">${Notas[i].titulo} </h5>
    <p class=" card-text ${Notas[i].realizada ? "text-decoration-line-through" : ""}">${Notas[i].texto}</p>
    <a href="#" class="btn btn-primary" onclick="borrarNota(${Notas[i].id})"> Borrar nota </a>
    
  </div>    
        `
            contenedor.appendChild(tarjeta)
        }
    }

}
pintarNotas(Notas)

let botonBorrar = document.getElementById("botonBorrar")
botonBorrar.addEventListener('click', (e) => {

    let Titulo = document.getElementById("Titulo")
    let Nota = document.getElementById("Nota")

    Titulo.value = ""
    Nota.value = ""
})

let botonGuardar = document.getElementById("botonGuardar")
botonGuardar.addEventListener('click', (e) => {
    let Titulo = document.getElementById("Titulo")
    let Nota = document.getElementById("Nota")
    if ((Nota.value != "") && (Titulo.value != "")) {
        agregarNota(Titulo.value, Nota.value)
    }

})

function agregarNota(titulo, texto) {
    let nota = {
        id: Notas.length,
        titulo: titulo,
        texto: texto,
        realizada: false,
    }

    Notas.push(nota);
    pintarNotas(Notas)
}
function borrarNota(id) {
    for (let i = 0; i < Notas.length; i++) {
        if (id == Notas[i].id) {
            Notas.splice(i, 1);
        }
    }
    pintarNotas(Notas)
}

function marcarRealizada(id) {
    for (let i = 0; i < Notas.length; i++) {
        if (id == Notas[i].id) {
            Notas[i].realizada = !Notas[i].realizada

        }
    }
    pintarNotas(Notas)
}
let Switch = document.getElementById("Switch")
Switch.addEventListener('click', (e) => {
    function filtrarNotasRealizadas(notas) {
        var notasRealizadas = notas.filter(nota => nota.realizada)
        return notasRealizadas;
    }
    let notasRealizadas = filtrarNotasRealizadas(Notas);

    if (e.target.checked == true) {
        pintarNotas(notasRealizadas)

    } else {
        pintarNotas(Notas)

    }

})

function filtrarNotasTexto(notas,texto) {
    if (texto == "") {
        return notas
    }
    var notasTexto = notas.filter (nota => nota.titulo.includes(texto) || nota.texto.includes(texto))
    return notasTexto
}

let Buscar = document.getElementById ("Buscar")

Buscar.addEventListener('keyup', (e) => {
    let notasTexto = filtrarNotasTexto(Notas,Buscar.value);
    pintarNotas(notasTexto)
})
