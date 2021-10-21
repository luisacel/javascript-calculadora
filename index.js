

const valorUno = document.getElementById('valor1')
const valorDos = document.getElementById('valor2')

function sumar() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 + val2
}

function restar() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 - val2
}

function multiplicar() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 * val2
}


function dividir() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    console.log(valorUno.value, valorDos.value);
    if (validarVacios(valorUno.value, valorDos.value)) {
        resultado.value = 'No ha digitado ningun numero'
    } else {
        validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 / val2
    }
}

function validarIsNan(valor1, valor2) {
    return isNaN(valor1) || isNaN(valor2) ? true : false;
}

function validarVacios(valor1, valor2) {
    return valor1 == '' || valor2 == '' ? true : false;
}



const resultado = document.getElementById('resultado')

document.formCalculadora.addEventListener("click", function(elemento) {
    const numerosValidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const operadoresValidos = ['+', '-', '*', '/']
    let texto = elemento.target.textContent

    if (numerosValidos.includes(texto) || operadoresValidos.includes(texto)) {
        console.log('linea 56')
        resultado.value = resultado.value + elemento.target.textContent
    }

    if (texto == '=') {
        resultado.value = calcular(resultado.value)
    }

})

function calcular(operacion) {
    console.log('operacion', operacion)
    return eval(operacion)
}


