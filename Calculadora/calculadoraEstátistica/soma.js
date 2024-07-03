function soma(callback){
    let numero1 = ''
    let numero2 = ''
    while(typeof numero1 ==='string' || isNaN(numero1) || numero1===""){
    console.log('Caso o valor não seja um número vou te perguntar novamente.')
    numero1 = parseFloat(prompt('Digite o primeiro numero a ser somado'))
}
    while(typeof numero1 ==='string' || isNaN(numero2) || numero2===''){
        console.log('Caso o valor não seja um número vou te perguntar novamente.')
    numero2 = parseFloat(prompt('Digite o segundo numero a ser somado'))
}
    let numero3 = numero1+numero2
    console.log(`A Soma dos valores deu ${numero3}`)
    callback()
}
module.exports = {soma}