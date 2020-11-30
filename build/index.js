"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// rest of the code remains same
const app = express_1.default();
const PORT = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => res.json({
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
            "acao": "stt",
            "menu": "menu 1",
            "opcao": "1",
            "acao_dados": {
                // Uma URL que você vai receber o POST com a transcrição do que foi falado
                "url": "https://fooo.com.br"
            }
        }
    ]
}));
app.post('/', (req, res) => {
    console.log(req);
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
