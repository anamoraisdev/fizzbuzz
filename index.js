
// divisivel por 3 = fizz;
// divisivel por 5 = buzz;
// ambos = fizzbuzz;
// nenhum = entrada;
// não é um numero = error!

function fizzBuzz(){
    const input = document.getElementById("valor")
    let entrada = input.value
    const saidaResultado = document.getElementById("resultado")
    let resultado;
    if ( entrada % 3 === 0 && entrada % 5 === 0){
        resultado = "FizzBuzz"
    } else if ( entrada % 3 === 0){
        resultado = "Fizz"
    } else if (entrada % 5 === 0){
        resultado = "Buzz"
    } else {
        resultado = entrada
    }
    saidaResultado.innerHTML = resultado 
}

