function adicionaItem(event) {
    const novoElemento = document.createElement("article")
    const novoItem = document.createTextNode("Novo Item")
    novoElemento.appendChild(novoItem)
    const container = document.getElementById("container")
    container.insertAdjacentElement("beforeend", novoElemento)
    novoElemento.classList.add("item")
}

const remover = document.getElementById("container")

function removeItem(event) {
    remover.remove()
}