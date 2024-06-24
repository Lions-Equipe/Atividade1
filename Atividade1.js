const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lembrete = []
exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Adicionar Lembrete
    2. Listar Lembrte
    3. Editar Lembrete
    4. Remover lembrete
    5. Marcar Lembrete como Concluido
    6. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                Adicionarlembrete()
                break;
            case '2':
                ListarLembrete()
                break;
            case '3':
                EditarLembrete()
                break;
            case '4':
                RemoverLembrete()
                break;
            case '5':
                MarcarcomoConcluido()
                break;
            case '6':
                rl.close()
                break;
            default:
                console.log('Opção inválida, tente novamente')
                exibirMenu()
                break;
        }
    })
}
funcaoRemover
console.log("Atualização de atividade!")

//função remover feita por guigaaaa
function remover(){
    rl.question('Digite o número de qual lembrete você deseja remover', (entrada) => {
        if(entrada > 0 && entrada < lembrete.length){
            lembrete.splice(entrada - 1, 1)
            console.log('Lembrete removido com sucesso!')
            exibirMenu()
        }else{
            console.log('Valor invalido!')
            remover()
        }
    })

function ListarLembrete() {
    if(lembrete == '') {
        console.log('Nenhum Lembrete salvo.')
    } 
    for (let i = 0; i < lembrete.length; i++) {
        console.log(`${i + 1}. ${lembrete[i]}`)
    }
    exibirMenu() 
}