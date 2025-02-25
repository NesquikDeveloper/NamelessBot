# NamelessBot  

Bot de suporte para o servidor Discord do NamelessMC. Se você está procurando nosso bot de integração do site com o Discord, visite o repositório [Nameless-Link](https://github.com/NamelessMC/Nameless-Link).  

## Como posso contribuir para o bot?  

Existem algumas formas de contribuir para o bot, tanto para desenvolvedores quanto para não desenvolvedores. Aqui estão duas opções:  

- **Para não desenvolvedores**: Você pode acessar o repositório [NamelessMC/BotConfiguration](https://github.com/NamelessMC/BotConfiguration) e ler o arquivo `README.md` para obter informações sobre como contribuir.  
  - Nesse repositório, você pode adicionar parâmetros ao comando `/support`, o que é muito útil para fornecer suporte a problemas comuns no Discord.  

- **Para desenvolvedores**: Você pode clonar este repositório para o seu computador e ajudar a melhorar o bot!  
  - **Nota para desenvolvedores**: Não adicione comandos inúteis ao bot que não tenham propósito (ou comandos inúteis com um motivo fraco).  
  - Certifique-se de manter o estilo de formatação usado no código. Por exemplo, evite o seguinte formato:  

```
function thisReturnsTrue() : boolean
{
    return true;
}
```

O formato correto é o seguinte:  

```
function thisReturnsTrue() : boolean {
    return true;
}
```

## Configuração  

1. Clone este repositório.  
2. Execute `npm install` para instalar todas as dependências.  
3. Depois de finalizar a codificação, execute `npx tsc` para compilar o bot.  
4. Crie um arquivo chamado `.env` e copie tudo do `.example.env` para ele. Em seguida, preencha os valores necessários.  
5. Execute `npm run start` para rodar o código compilado.  

Este bot usa **Tesseract-OCR** para escanear automaticamente imagens em busca de texto. Para instalá-lo, siga este [tutorial](https://github.com/tesseract-ocr/tessdoc/blob/main/Installation.md).
