import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados");
const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    if (confirmacao) {
        elemento.remove();
        const listaDeCompras = document.getElementById("lista-de-compras");

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export { excluirItem };