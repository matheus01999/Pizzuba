'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "matheus",
    email: "matheus.rocha01999@outlook.com",
    celular: "949730036",
    cidade: "são paulo"

}


//interação com o layout
const saveClient = () => {
    if(isValidFields()){
        console.log("Cadastrnado Cliente")
    }
}

//FUNÇOES DO LOCALSTORAGE

const getLS = () => JSON.parse(localStorage.getItem('db_client'))??[]
const setLS = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))


// CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLS()
    dbClient.push(client)
    setLS(dbClient)
}

//CRUD - READ
const readClient = () => getLS()

//CRUD - UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLS(dbClient)
}

//CRUD - DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLS (dbClient)
}


//EVENTS

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)