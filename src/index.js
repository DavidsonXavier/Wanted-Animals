const dadosJSON = [{
    nome: "Ralf",
    anoNascimento: 2010,
    diaDesparecido: "05/01/2020",
    encontrado: false,
    imagem: "images/dog1.jpg"
}, {
    nome: "Caramelo",
    anoNascimento: 2022,
    diaDesparecido: "03/04/2021",
    encontrado: false,
    imagem: "images/dog2.jpg"
}

]


for (let i = 0; i < dadosJSON.length; i++) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let img = document.createElement('img')
    let ul = document.querySelector('[listaAnimais]')

    span.innerHTML = `<br>Nome: ${dadosJSON[i].nome}<br> Ano de Nascimento: ${dadosJSON[i].anoNascimento}<br> Dia do Desaparecimento: ${dadosJSON[i].diaDesparecido}`

    img.setAttribute(`src`, `${dadosJSON[i].imagem}`)
    li.append(img)
    li.appendChild(span)
    ul.appendChild(li)
}


