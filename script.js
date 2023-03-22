const { Configuration, OpenAIApi } = require('openai');

// For safety API keys stores in api.js file
const apiOpenAi = require("./api.js")
const apiTelegram = require("./api.js")

apiKeyOpenAi = apiOpenAi["apiOpenAi"]["api"]
apiKeyTelegram = apiTelegram["apiTelegram"]["api"]


const Telegram = require('@yuva1422/telegram.js');
const client = new Telegram.Client();
let answer = '';
let prompt = '';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  prompt = msg.content;
  const configuration = new Configuration({
    apiKey: apiKeyOpenAi,
  });
  const openai = new OpenAIApi(configuration);
  
  (async() => {
    const gptResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 1,
    max_tokens: 350,
    })
    console.log(prompt)
    answer = gptResponse.data.choices[0].text;
    msg.reply(answer);
  })()
});

client.login(apiKeyTelegram);

client.startPolling();
