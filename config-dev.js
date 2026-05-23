const { defineConfig } = require("cypress") // importar função baseConfig
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(__dirname, './.env.dev')
})


const e2e = { //configuração dos testes e2e
    baseUrl: process.env.BASE_URL,
    env: {
        username: process.env.USER,
        password: process.env.PASSWORD
    }
}

//exportando uma configuração das duas combinações
module.exports = defineConfig ({
//copiando arquivo de configur. e dev + arquivos como base
    ...baseConfig,
    e2e
})