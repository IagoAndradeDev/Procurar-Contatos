const buttonPesquisar = document.querySelector(".buttons button")
const inputPesquisar = document.querySelector(".pesquisar input")
const layoutResultado = document.querySelector(".resultado")
const resultadoUsuario = document.querySelector(".texto h2")
const resultado = document.querySelector(".usuario p")

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
            layoutResultado.style.display = ""
            resultadoUsuario.innerHTML = "Usuario Encontrado"
            resultado.innerHTML = `${Contatos[i].Nome} - ${Contatos[i].Telefone}`
            break
        } else {
            layoutResultado.style.display = ""
            resultadoUsuario.innerHTML = "Usuario não encontrado"
            resultado.innerHTML = `Não existe esse usuario!`
        }
    } 
}

buttonPesquisar.addEventListener("click", Pesquisar)