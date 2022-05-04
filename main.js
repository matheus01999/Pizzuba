'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')
 
const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const openModalPedi = () => document.getElementById('modalPedi')
    .classList.add('active')

const closeModalPedi = () => {
    clearFields()
    document.getElementById('modalPedi').classList.remove('active')
}


const tempClient = {
    nome: "matheus",
    email: "matheus.rocha01999@outlook.com",
    celular: "949730036",
    cidade: "são paulo"

}


//interação com o layout
const saveClient = () => {
    if(isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        closeModal()
    }
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = ( ) => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
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


//EVENTS CLIENTES

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

//EVENTS PEDIDOS

document.getElementById('cadastrarPedido')
    .addEventListener('click', openModalPedi)

document.getElementById('modalClosePedi')
    .addEventListener('click', closeModalPedi)

//EVENTS BOTÕES

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

document.getElementById('cancelarPedi')
    .addEventListener('click', closeModalPedi)
    //TESTE     

    document.getElementById('pedidoSemCadastro')
        .addEventListener('click' , my_fun)
