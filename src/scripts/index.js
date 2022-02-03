function getAnimais() {
    fetch('http://127.0.0.1:3000/animais')
        .then(resp => resp.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let li = document.createElement('li')
                let span = document.createElement('span')
                let img = document.createElement('img')
                let ul = document.querySelector('[listaAnimais]')

                span.innerHTML = `<br>Nome: ${data[i].nome}<br> Ano de Nascimento: ${data[i].anoNascimento}<br> Dia do Desaparecimento: ${data[i].diaDesparecido}`

                img.setAttribute(`src`, `${data[i].imagem}`)
                img.setAttribute('alt', `Cachorro ${data[i].nome}`)
                li.append(img)
                li.appendChild(span)
                ul.appendChild(li)
            }
        })

}


function cadastrarAnimal (){
    fetch('http://127.0.0.1:3000/animais', {
        method: "POST",
        body: JSON.stringify(novoObjeto),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }
    
    )
    .catch(err=> {
        console.log(err)
    })
}






getAnimais()