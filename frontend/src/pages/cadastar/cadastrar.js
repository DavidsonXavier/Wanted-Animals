const botao = document.querySelector('[submeter]')



botao.addEventListener('click', (evt) => {
    evt.preventDefault()
    const imagem = document.querySelector('[imageJS]').value.replace('C:\\fakepath\\','')

    

    const body = {
        nome: document.getElementById('nome').value,
        anoNascimento: document.getElementById('anoNascimento').value,
        diaDesaparecido: document.getElementById('diaDesparecido').value,
        imagem: `images/${imagem}`,
        encontrado: false
    }
    if (!body.nome || !body.anoNascimento || !body.diaDesaparecido || !imagem) {
        alert('Preencha Todos Os campos')
        return
    }

    console.log(body)

    fetch('http://127.0.0.1:3000/animais', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, method: 'POST', 
        body: JSON.stringify(body)
    })
    
})