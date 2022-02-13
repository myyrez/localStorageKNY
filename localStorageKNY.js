let adicionarNome = document.getElementById('adicionarNome')
let oniHumano = document.getElementById('oniHumano')
let respiracaoArte = document.getElementById('respiracaoArte')

let pesquisaLocalStorage = document.getElementById('pesquisaLocalStorage')
let adicionarNome2 = document.getElementById('adicionarNome2')
let oniHumano2 = document.getElementById('oniHumano2')
let respiracaoArte2 = document.getElementById('respiracaoArte2')

let vetorAdicionarNome = []
let vetorOniHumano = []
let vetorRespiracaoArte = []

function salvarLocalStorage() {
    vetorAdicionarNome = JSON.parse(localStorage.getItem('chaveAdicionarNome'))
    vetorOniHumano = JSON.parse(localStorage.getItem('chaveOniHumano'))
    vetorRespiracaoArte = JSON.parse(localStorage.getItem('chaveRespiracaoArte'))

    if (vetorAdicionarNome == null) {
        vetorAdicionarNome = []
        vetorOniHumano = []
        vetorRespiracaoArte = []
    }
    if (adicionarNome.value == '' || oniHumano.value == '' || respiracaoArte.value == '') {
        alert('Todos os campos precisam ser preenchidos!')
        return;
    } else {
        for (let i = 0; i < vetorAdicionarNome.length; i++) {
            if (adicionarNome.value == vetorAdicionarNome[i]) {
                alert('Você já tem um personagem com esse nome.')
                return;
            }
        }
    }
    vetorAdicionarNome.push(adicionarNome.value)
    vetorOniHumano.push(oniHumano.value)
    vetorRespiracaoArte.push(respiracaoArte.value)

    localStorage.setItem('chaveAdicionarNome', JSON.stringify(vetorAdicionarNome))
    localStorage.setItem('chaveOniHumano', JSON.stringify(vetorOniHumano))
    localStorage.setItem('chaveRespiracaoArte', JSON.stringify(vetorRespiracaoArte))

    window.location.href = 'paginaGet.html'
}

function pesquisarPersLocalStorage() {
    vetorAdicionarNome = JSON.parse(localStorage.getItem('chaveAdicionarNome'))
    vetorOniHumano = JSON.parse(localStorage.getItem('chaveOniHumano'))
    vetorRespiracaoArte = JSON.parse(localStorage.getItem('chaveRespiracaoArte'))

    for (i = 0; i < vetorAdicionarNome.length; i++) {
        if (pesquisaLocalStorage.value == vetorAdicionarNome[i]) {

            adicionarNome2.value = vetorAdicionarNome[i]
            oniHumano2.value = vetorOniHumano[i]
            respiracaoArte2.value = vetorRespiracaoArte[i]
        }
    }
    if (adicionarNome2.value == '') {
        alert('não encontramos nenhum personagem com esse nome... :(')
    }
    switch (true) {
        case adicionarNome2.value == 'zenitsu' || adicionarNome2.value == 'zenitsu agatsuma':
            img.src = 'https://media1.giphy.com/media/fTn01fiFdTd5pL60ln/200w.webp?cid=ecf05e47n4snh9lgkdpqkxn76hf18ry49jh1kb6qjv3186jo&rid=200w.webp&ct=g.gif'
            break;

        case adicionarNome2.value == 'tanjiro' || adicionarNome2.value == 'tanjiro kamado':
            img.src = 'https://media1.giphy.com/media/J6JazAkCVLId91L4yM/200w.webp?cid=ecf05e47mzoekl8a1vpv2w65ehcw6tequz28nc6qwvnq9qgx&rid=200w.webp&ct=g.gif'
            break;

        case adicionarNome2.value == 'inosuke' || adicionarNome2.value == 'inosuke hashibira':
            img.src = 'https://media2.giphy.com/media/tjeICfdc4yGNpp07SV/200w.webp?cid=ecf05e475zfyw4y7bbm12n4qd9rl1wdqmp2urqa9taevpdwo&rid=200w.webp&ct=g.gif'
            break;
    }
}

function excluirPersLocalStorage() {
    if (adicionarNome2.value == '' || oniHumano2.value == '' || respiracaoArte2.value == '') {
        alert(`primeiro, clique em "Pesquisar personagem" para preencher os campos!`)
    } else {
        vetorAdicionarNome = JSON.parse(localStorage.getItem('chaveAdicionarNome'))
        vetorOniHumano = JSON.parse(localStorage.getItem('chaveOniHumano'))
        vetorRespiracaoArte = JSON.parse(localStorage.getItem('chaveRespiracaoArte'))

        for (i = 0; i < vetorAdicionarNome.length; i++) {
            if (pesquisaLocalStorage.value == vetorAdicionarNome[i]) {
                vetorAdicionarNome.splice([i], 1)
                vetorOniHumano.splice([i], 1)
                vetorRespiracaoArte.splice([i], 1)

                localStorage.setItem('chaveAdicionarNome', JSON.stringify(vetorAdicionarNome))
                localStorage.setItem('chaveOniHumano', JSON.stringify(vetorOniHumano))
                localStorage.setItem('chaveRespiracaoArte', JSON.stringify(vetorRespiracaoArte))

                window.location.href = 'paginaGet.html'
            }
        }
    }
}

function atualizarPersLocalStorage() {
    if (adicionarNome2.value == '' || oniHumano2.value == '' || respiracaoArte2.value == '') {
        alert("por favor, preencha os campos!")
        return;
    } else {
        for (i = 0; i < vetorAdicionarNome.length; i++) {
            if (adicionarNome2.value == vetorAdicionarNome[i] && adicionarNome2.value != pesquisaLocalStorage.value) {
                alert('Você já tem um personagem com esse nome.')
                return;
            }
        }
        vetorAdicionarNome = JSON.parse(localStorage.getItem('chaveAdicionarNome'))
        vetorOniHumano = JSON.parse(localStorage.getItem('chaveOniHumano'))
        vetorRespiracaoArte = JSON.parse(localStorage.getItem('chaveRespiracaoArte'))

        for (i = 0; i < vetorAdicionarNome.length; i++) {
            if (pesquisaLocalStorage.value == vetorAdicionarNome[i]) {

                vetorAdicionarNome.splice([i], 1, adicionarNome2.value)
                vetorOniHumano.splice([i], 1, oniHumano2.value)
                vetorRespiracaoArte.splice([i], 1, respiracaoArte2.value)
            }
        }
    }
    localStorage.setItem('chaveAdicionarNome', JSON.stringify(vetorAdicionarNome))
    localStorage.setItem('chaveOniHumano', JSON.stringify(vetorOniHumano))
    localStorage.setItem('chaveRespiracaoArte', JSON.stringify(vetorRespiracaoArte))

    window.location.href = 'paginaGet.html'
}

function voltarPaginaSet() {
    window.location.href = 'paginaSet.html'
}

function voltarPaginaGet() {
    window.location.href = 'paginaGet.html'
}