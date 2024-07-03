const prompt = require('prompt-sync')({sigint: true})
const {exibirMenu} = require('./menu')

global.prompt = prompt

exibirMenu()