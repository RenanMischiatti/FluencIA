const apiKey = '';
const endpoint = 'https://api.openai.com/v1/completions';
const maxTokens = 50;

async function responderApi(msg) {
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: msg,
      max_tokens: maxTokens,
    }),
  })
  .then(response => response.json())
  .then(data => {
    const resposta = data.choices[0].text;
    mostrarNaTela(resposta)
  })
  .catch(error => {
    console.error('Erro ao fazer a solicitação para a API do OpenAI:', error);
  });
}


async function mostrarNaTela(msg, user = false) {
    $('#areaChat .container').append(`
        <div class="mb-3 d-flex w-100 mensagem">
          <span class="msg ${user ? 'enviada' : 'recebida'}">${msg}</span>
        </div>
    `)
}

function iniciarConversa() {
    $('#areaChat').fadeOut('fast', function() {
        $(this).html(`
          <div class="container p-4 d-flex flex-column"></div>
        `).fadeIn('fast')

    })
}