function carregar() {
    var img = document.querySelector('img#imagem')
    var msg = document.querySelector('div#msg')
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    msg.innerHTML = `Hora atual: ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = 'rgb(149, 155, 158)'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'rgb(201, 143, 93)'
    } else {
        // BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = 'rgb(12, 22, 24)'
    }
}

