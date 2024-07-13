// let contenedor= document.getElementById("caja")
// console.log(contenedor);

// contenedor.addEventListener('click', (o) => {
//     console.log(o.target.classList);
//     if (o.target.classList.contains('cuadrado')) {
//         o.target.classList.toggle('circulo')

//     }

// })

let botonCalcularMasa = document.getElementById("botonCalcularMasa")

botonCalcularMasa.addEventListener('click', (e) => {

    let imputEstatura = document.getElementById("estatura")
    let imputPeso = document.getElementById("peso")

    let valorPeso = imputPeso.value
    let ValorEstatura = imputEstatura.value / 100


    let resultadoMasa = ((valorPeso) / (Math.pow(ValorEstatura, 2)))
    console.log(resultadoMasa);

    let imputResultado = document.getElementById("resultado")
    imputResultado.value = resultadoMasa.toFixed(1)
    
})

