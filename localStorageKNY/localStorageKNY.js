let adicionarNomes = document.getElementById('adicionarNomes')
let excluirNomes = document.getElementById('excluirNomes')
let listarNomes = document.getElementById('listarNomes')
let nomesLs = []

function salvarNomeLocalStorage() {
    nomesLs = JSON.parse(localStorage.getItem('chaveNomes'))

    if (nomesLs == null) {
        nomesLs = []
        nomesLs.push(adicionarNomes.value)

        localStorage.setItem('chaveNomes', JSON.stringify(nomesLs))
    } else {
        nomesLs.push(adicionarNomes.value)

        localStorage.setItem('chaveNomes', JSON.stringify(nomesLs))
    }
}

function excluirNomeLocalStorage() {
    nomesLs = JSON.parse(localStorage.getItem('chaveNomes'))

    for (let i = 0; i < nomesLs.length; i++) {
        if (excluirNomes.value == nomesLs[i]) {
            nomesLs.splice([i], 1)
            alert('achou')
        }
    }
    localStorage.setItem('chaveNomes', JSON.stringify(nomesLs))
}

let novaOpcao = new Option(JSON.parse(localStorage.getItem('chaveNomes')));

for (let i = 0; i < nomesLs.length; i++) {
    if (listarNomes == null) {
    listarNomes.innerText = JSON.parse(localStorage.getItem('chaveNomes'))
    } else {
        add(novaOpcao).innerText = JSON.parse(localStorage.getItem('chaveNomes'))
    }
}
