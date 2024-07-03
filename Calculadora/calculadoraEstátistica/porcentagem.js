function porcentagem(callback){
    let numero1 = ''
    let numero2 = ''
    while(typeof numero1 ==='string' || isNaN(numero1) || numero1===""){
    console.log('Caso o valor não seja um número vou te perguntar novamente.')
    numero1 = parseFloat(prompt('Digite a porcentagem que você quer descobrir de um numero'))
}
    while(typeof numero1 ==='string' || isNaN(numero2) || numero2===''){
        console.log('Caso o valor não seja um número vou te perguntar novamente.')
    numero2 = parseFloat(prompt('Digite o número que você quer descobrir a porcentagem digitada anteriormente'))
}
    let numero3 = numero2*(numero1/100)
    console.log(`${numero1}% do número ${numero2} é ${numero3}`)
    callback()
}
module.exports = {porcentagem}