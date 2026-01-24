# Teste IBBX

Este projeto requer Node.js para funcionar corretamente.

## Configuração Inicial

1. **Dependências**: Entre na pasta `server` e instale as dependências com `npm install`.

2. **Dependências**: Entre na pasta `web` e instale as dependências com `npm install`.

### Rodando o Projeto

1. **Servidor**: Na pasta `server`, execute o comando `npm run dev` para iniciar o servidor.

2. **Web**: Na pasta `web`, execute o comando `npm run dev` para iniciar o aplicativo web.

Agora você deve ser capaz de acessar o aplicativo em `localhost:5173`

## Testando as Rotas de Reading

O endpoint `/sensor-readings` foi configurado como se fosse algo recebido do sensor. Para fazer o teste, é necessário usar algum aplicativo como **Insomnia** ou **HTTPie** e realizar as rotas de reading, simulando dados enviados pelo sensor.

**Exemplo de requisição POST para `/sensor-readings`:**

```
POST http://localhost:3333/sensor-readings
Content-Type: application/json

{
  "assetId": "uuid-do-asset",
  "temperature": 25.5,
  "vibration": 100
}
```

