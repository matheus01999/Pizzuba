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

//Atualização tabela Cliente
const createRow = (client) => {
    const newRow = document.createElement('tr')
newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green">Editar</button>
            <button type="button" class="button red" >Excluir</button>
        </td>
    `
    document.querySelector('#tbClient>tbody').appendChild(newRow)
}


const updateTable = () => {
    const dbClient = readClient()
    dbClient.forEach(createRow)

    
}

//Atualização Tabela Pedido
const createRowPedi = (pedido) => {
    const newRowPedi = document.createElement('tr')
newRowPedi.innerHTML = `
        <td>${pedido.sabor}</td>
        <td>${pedido.tamanho}</td>
        <td>${pedido.tipo}</td>
        <td>
            <button type="button" class="button green">Editar</button>
            <button type="button" class="button red" >Excluir</button>
        </td>
    `
    document.querySelector('#tbPedi>tbody').appendChild(newRowPedi)
}


const updateTablePedi = () => {
    const dbPedi = readPedi()
    dbPedi.forEach(createRowPedi)

    
}


//interação com o Layout Pedidos
const savePedi = () => {
    if(isValidFieldsPedi()){
        const pedido = {
            sabor: document.getElementById('sabor').value,
            tamanho: document.getElementById('tamanho').value,
            tipo: document.getElementById('tipo').value,
        }
        createPedi(pedido)
        updateTablePedi()
    }
}

//interação com o layout Clientes
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
        updateTable()
    }
}

// Validação dos campos de formularios

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const isValidFieldsPedi = () => {
    return document.getElementById('formPedi').reportValidity()
}


const clearFields = ( ) => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

//LOCALSTORAGE PEDIDOS

const getLSPedi = () => JSON.parse(localStorage.getItem('db_Pedi'))??[]
const setLSPedi = (dbPedi) => localStorage.setItem("db_Pedi", JSON.stringify(dbPedi)) 

// CRUD PEDIDOS

const createPedi = (pedido) => {
    const dbPedi = getLSPedi()
    dbPedi.push(pedido)
    setLSPedi(dbPedi)
}

const readPedi = () => getLSPedi()

const updatePedi = (index, pedido) => {
    const dbPedi = readPedi()
    dbPedi[index] = pedido
    setLSPedi(dbPedi)
}

const deletePedi = (index) => {
    const dbPedi = readPedi()
    dbPedi.splice(index, 1)
    setLSPedi (dbPedi)
}


//LOCALSTORAGE CLIENTES

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

document.getElementById('salvarPedi')
    .addEventListener('click',savePedi )

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

document.getElementById('cancelarPedi')
    .addEventListener('click', closeModalPedi)
    //TESTE     

