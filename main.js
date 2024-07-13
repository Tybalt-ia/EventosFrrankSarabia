

let botonCalcularMasa = document.getElementById("botonCalcularMasa")

let imputEstatura = document.getElementById("estatura")
let imputPeso = document.getElementById("peso")


imputEstatura.addEventListener('keyup', (e) => {
    if (parseInt(e.target.value) <= 0) {
        imputEstatura.value = "";
    }
})

imputPeso.addEventListener('keydown', (e) => {
    if (parseInt(e.target.value) <= 0) {
        imputPeso.value = "";
    }
})



botonCalcularMasa.addEventListener('click', (e) => {

    let valorPeso = imputPeso.value
    let ValorEstatura = imputEstatura.value / 100

    let resultadoMasa = ((valorPeso) / (Math.pow(ValorEstatura, 2)))

    let imputResultado = document.getElementById("resultado")
    imputResultado.value = resultadoMasa.toFixed(1)

})

