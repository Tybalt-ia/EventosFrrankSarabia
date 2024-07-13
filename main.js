

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

let imputPesos = document.getElementById("Peso")

imputPesos.addEventListener('keyup', (e) => {
    let cifraPeso = e.target.value
    let resultadoPeso = (cifraPeso/3900)
    let Dolar = document.getElementById("Dolar")
    Dolar.value = resultadoPeso
})

let imputDolar = document.getElementById("Dolar")

imputDolar.addEventListener('keyup', (e) => {
    let cifraDolar = e.target.value
    let resultadoDolar = (cifraDolar*3900)
    let Peso = document.getElementById ("Peso")
    Peso.value = resultadoDolar
})

