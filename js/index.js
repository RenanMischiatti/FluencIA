function comecar() {
    let nome = $('#nome').val()
    let idioma = $('#idioma').val()
    let dificuldade = $('#dificuldade').val()

    if(!verificarNavegador()) return;


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
function verificarNavegador() {    
    if (!'SpeechRecognition' in window || !'webkitSpeechRecognition' in window) {
        alert('O navegador não suporta reconhecimento de fala.');
        return false
    }
    if (!'speechSynthesis' in window) {
        alert('Este navegador não suporta a API de fala.');
        return false;
    }

    return true;
}