let Notas= [
    {
        id: 0,
        titulo: 'sacara la basura',
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
        realizada: false
    },
]

let idGlobal = 3
function pintarNotas(Notas) {
    console.log("algo");
    
    for (let i = 0; i < Notas.length; i++) {

        let contenedor = document.getElementById("contenedorNotas")

        let tarjeta = document.createElement('div')
        tarjeta.className = "card m-1 text-center mb-3"
        tarjeta.innerHTML = `
              <div class="card-body">
    <h5 class="card-title">${Notas[i].titulo} </h5>
    <p class="card-text">${Notas[i].texto}</p>
    <a href="#" class="btn btn-primary"> Borrar nota </a>
  </div>    
        `
        contenedor.appendChild(tarjeta)
    }
    
}
pintarNotas(Notas)

let borrar = document.getElementById ("botonBorrar")
botonBorrar.addEventListener('click', (e) => {

    let Titulo = document.getElementById ("Titulo")
    let Nota = document.getElementById ("Nota")
    
    titulo.addEventListener('keyup', (e) => {
        if (parseInt(e.target.value) <= 0) {
            imputEstatura.value = "";
        }
    })
    


   
})