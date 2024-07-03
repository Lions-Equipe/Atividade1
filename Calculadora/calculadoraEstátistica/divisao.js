function divisao(callback){
    let numero1 = ''
    let numero2 = ''
    while(typeof numero1 ==='string' || isNaN(numero1) || numero1===""){
    console.log('Caso o valor não seja um número vou te perguntar novamente.')
    numero1 = parseFloat(prompt('Digite o primeiro numero a ser dividido'))
}
    while(typeof numero1 ==='string' || isNaN(numero2) || numero2===''){
        console.log('Caso o valor não seja um número vou te perguntar novamente.')
    numero2 = parseFloat(prompt('Digite o segundo numero que vai dividir o primeiro'))
}
    let numero3 = numero1/numero2
    console.log(`A Divisão dos valores deu ${numero3}`)
    callback()
}
module.exports = {divisao}