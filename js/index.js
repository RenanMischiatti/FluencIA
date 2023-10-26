function comecar() {
    let nome = $('#nome').val()
    let idioma = $('#idioma').val()
    let dificuldade = $('#dificuldade').val()

    if (!'SpeechRecognition' in window || !'webkitSpeechRecognition' in window) {
        alert('O navegador não suporta reconhecimento de fala.');
        return
    }

    if(!nome.length) {
        alert('É necessário dar o nome');
        return;
    }

    var speech = new speechApi(idioma)
    $('#areaConfig').fadeOut('slow', function() {
        $(this).remove()
        $('#areaChat').html(`
            <div class="three-body justify-self-center align-self-center">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
            </div>
        `).css('display', 'flex').fadeIn('fast')
    })

    speech.start()

    
}
