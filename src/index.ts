import express from 'express';
// rest of the code remains same
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json())

app.get('/', (req, res) => res.json(

  {
    "nome": "Menu Principal",
    "dados": [
      {
        "acao": "tts",
        "menu": "menu 1",
        "acao_dados": {
          // Uma mensagem que será lida (texto falado)
          "mensagem": "Olá! Vamos jogar? Digite 1 e após o bípe você deve falar o nome de um funcionário da TotalVoice e eu descobrir o setor que essa pessoa trabalha"
        }
      },

      {
        "acao": "stt", //Speech to text
        "menu": "menu 1",
        "opcao": "1",
        "acao_dados": {
          // Uma URL que você vai receber o POST com a transcrição do que foi falado
          "url": "https://fooo.com.br"
        }
      }
    ]
  }

));

app.post('/', (req, res) => {
  console.log(req)
}); 


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});