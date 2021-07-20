var primeiroValor = parseInt(prompt("Digite o primeiro número:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))
var operacao = prompt("Digite 1 para adição, 2 para subtração, 3 para multiplicação e 4 para divisão: ")

firstNumber.innerHTML = primeiroValor
secondNumber.innerHTML = segundoValor
operacaoDesejada.innerHTML = operacao


if (operacao ==1 ) {
  var resultadoSoma = primeiroValor + segundoValor  
  operacaoDesejada.innerHTML = ("+")
  resultNumber.innerHTML = (resultadoSoma.toFixed(2))  
} else if (operacao ==2 ) {
  var resultadoSubstracao = primeiroValor - segundoValor  
  operacaoDesejada.innerHTML = ("-")
  resultNumber.innerHTML = (resultadoSubstracao.toFixed(2)) 
} else if (operacao ==3 ) {
  var resultadoMultiplicacao = primeiroValor * segundoValor 
  operacaoDesejada.innerHTML = ("*") 
  resultNumber.innerHTML = (resultadoMultiplicacao.toFixed(2))  
} else if (operacao ==4 ) {
  var resultadoDivisao = primeiroValor / segundoValor 
  operacaoDesejada.innerHTML = ("/") 
  resultNumber.innerHTML = (resultadoDivisao.toFixed(2)) 
} else {
  alert("Opção inválida")
  primeiroValor = ""
  segundoValor = ""
  operacao = ""
  resultNumber.innerHTML = "Opção inválida, atualize a página"
}

document.write(primeiroValor)
document.write(operacao)
document.write(segundoValor)