# Простейший Telegram-бот на Node.JS

Это простой Telegram-бот, который использует API OpenAI для генерации ответов.

## Зависимости

Этот бот использует [Openal API](https://openai.com/) для генерации ответов в разговоре. Он также использует [@yuva1422/telegram.js ](https://github.com/yuva1422/telegram.js) библиотеку для взаимодействия с Telegram API.

## Особенности использования
<img src="image.png" width="640">

На один аккаунт OpenAI допускает генерацию ~900к токенов (18$) на `text-davinci-003`.
Ссылка на моего бота (скорее всего, в будущем не будет работать): [nibezo gpt](https://t.me/nibezo_gpt_bot).

## Хранение ключей API

Ключи хранятся в `api.js` в корне проекта:

`module.exports.apiOpenAi = {"api": "API OpenAPI"};`

`module.exports.apiTelegram = {"api": "API Telegram"};`

Файл `api.js` добавлен в `.gitignore`. 