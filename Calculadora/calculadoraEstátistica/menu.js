const {soma} = require('./soma')
const {subtracao} = require('./subtracao')
const {divisao} = require('./divisao')
const {porcentagem} = require('./porcentagem')
const {multiplicação} = require('./multiplicacao')

function exibirMenu(){
    console.log(`
        Bem vindo a calculadora,essas são as operações en funcionamento:
        + (Soma)
        - (Subtração)
        * (Multiplicação)
        / (Divisão)
        % (Porcentagem)
        (Obs: Essa calculadora faz as operações somente com 2 valores)
        `)
        let escolha = prompt('Digite qual operação gostaria ou Sair para fechar o programa.').toLowerCase()
        switch(escolha){
            case "+":
                soma(exibirMenu)
                break
            case "-":
                subtracao(exibirMenu)
                break
            case "*":
                multiplicaçãog(exibirMenu)
                break
            case "/":
                divisao(exibirMenu)
                break
            case "%":
                porcentagem(exibirMenu)
                break
            case "sair":
                break
            default:
            console.log(`O operador digitado foi ${escolha} e nao foi reconhecido.Tente novamente.`)
            exibirMenu()
        }
}
module.exports = {exibirMenu}