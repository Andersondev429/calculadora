var resultado = document.getElementById("resultado")
var primeiroValor = document.getElementById("firstNumber1").value
var segundoValor = document.getElementById("secondNumber2").value


const calcular = () => {
    var operacoes = document.querySelector('input[name="operacao"]:checked').value
    if (operacoes == "adicao") {
        resultado = (parseFloat(firstNumber1.value)) + parseFloat(secondNumber2.value)
    } else if (operacoes == "subtracao") {
        resultado = (parseFloat(firstNumber1.value) - parseFloat(secondNumber2.value))
    } else if (operacoes == "multiplicacao") {
        resultado = (parseFloat(firstNumber1.value) * parseFloat(secondNumber2.value))
    } else if (operacoes == "divisao") {
        resultado = (parseFloat(firstNumber1.value) / parseFloat(secondNumber2.value))
    } else{
        resultado = "Opção inválida, selecione a operação"
    }
    document.getElementById('resultado').setAttribute("value", resultado.toFixed(2));
}

var calculo = document.getElementById("calcular")
calculo.addEventListener("click", ()=> calcular())