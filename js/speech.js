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

            console.log(spokenWord)
            await mostrarNaTela(spokenWord);
            // responderApi(transcript)
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
