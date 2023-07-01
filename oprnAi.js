'use Strict'
// 変数の定義
//モジュールの読み込み
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv').config();
const fs = require('fs');
const http = require('http');

//httpサーバーポートの設定
const port = 8000;

//環境変数の読み込み
const env = process.env;

//chatGPTへの入力メッセージ
const chatGptMessage = "4問のクイズと、その答えを4択で出して";

//テスト出力
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: chatGptMessage }],
    });
    console.log(completion.data.choices[0].message);
})();


/**
http.createServer( (request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello World');
}).listen(port);
*/