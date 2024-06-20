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
console.log("Atualização de atividade!")

//função editar feita por Edu

function editar (){
    lembrete.forEach((lembreteEditar, i) => {
        console.log(`${i +1}. ${lembreteEditar} `)
        rl.question("Qual lembrete você gostaria de editar",(lembrete)=>{
            rl.question("Qual prazo você gostaria de editar",(prazo)=> {
                rl.question("Qual status você gostaria de editar",(status)=> {
                   lembretes[i-1]={lembrete,prazo,status}

                   console.log('editado com sucesso')
                   }) 
                })

            })
        })
    }

