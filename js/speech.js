const btnGravar = document.querySelector("#btnGravar")

class speechApi {

    constructor(lang) {

        const speechToText = window.SpeechRecognition || window.webkitSpeechRecognition

        this.speechApi = new speechToText();
        this.speechApi.continuous = true
        this.speechApi.lang = lang
        this.speechApi.onresult = e => {
            var resultIndex = e.resultIndex
            var transcript = e.results[resultIndex][0].transcript

           console.log(transcript)
        }
    }

    start() {
        this.speechApi.start()
    }

    stop() {
        this.speechApi.stop()
    }
}
