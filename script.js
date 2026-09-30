const buttonPesquisar = document.querySelector(".buttons button")
const inputPesquisar = document.querySelector(".pesquisa input")
const resultado = document.querySelector(".resultado p")

const Contatos = [
    {Nome: "Iago", Telefone: "31 98021-3282"},
    {Nome: "Julia", Telefone: "31 98553-7545"},
    {Nome: "Pedro", Telefone: "31 98776-3008"},
    {Nome: "Carol", Telefone: "31 97001-5644"},
    {Nome: "Davi", Telefone: "31 98741-7488"}
]

function Pesquisar() {
    const contato = inputPesquisar.value.toLowerCase()
    for(let i = 0; i < Contatos.length; i++){
        if (contato === Contatos[i].Nome.toLowerCase()) {
            resultado.innerHTML = `Usuario encotrado: Nome:${Contatos[i].Nome} Telefone: ${Contatos[i].Telefone}`
            break
        } else {
            resultado.innerHTML = 'Usuario não encontrado!'
        }
    } 
}

buttonPesquisar.addEventListener("click", Pesquisar)