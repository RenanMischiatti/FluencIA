const btnGravar = document.querySelector("#btnGravar")

class speechApi {

    constructor(lang) {

        const speechToText = window.SpeechRecognition || window.webkitSpeechRecognition

        this.speechApi = new speechToText();
        this.speechApi.continuous = true
        this.speechApi.lang = lang
        this.speechApi.onresult = async e => {
            var resultIndex = e.resultIndex
            var spokenWord = e.results[resultIndex][0].transcript


            await mostrarNaTela(spokenWord, true);
            await falar(spokenWord, lang)
            // await responderApi(spokenWord)
        }
        this.speechApi.addEventListener("start", () => {
            iniciarConversa()
        })
        this.speechApi.addEventListener("stop", () => {
            returnToMenu();
        })
    }

    start() {
        this.speechApi.start()
    }

    stop() {
        this.speechApi.stop()
    }
}

async function falar(msg, lang) {
    var synth = window.speechSynthesis;

    var textoParaFalar = new SpeechSynthesisUtterance(msg);
    textoParaFalar.lang = lang;

    var vozes = synth.getVoices();
    textoParaFalar.voice = vozes[0]; 


    synth.speak(textoParaFalar);
}