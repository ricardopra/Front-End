function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 19
    msg.innerHTML = `agora são ${hora} horas`

    if (hora >= 0 && hora < 12 ){

        img.src = 'manhã.jpg'
        document.body.style.background = '#e2cd9f'

    }else if (hora >=12 && hora < 18) {

        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'

    }else{
        img.src = 'Noite.jpg'
        document.body.style.background = '#515154'

    }


}

