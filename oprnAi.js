'use Strict'
// 変数の定義
//モジュールの読み込み
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const fs = require('fs');
const http = require('http');

//バックコール関数の定義
const call = (tmp) => {
    tmp;
}

//httpサーバーポートの設定
const port = 8000;

//chatGPTへの入力メッセージをファイルから読み込み
const chatGptTemplate = fs.readFileSync('./ChatGptTemplate.txt', 'utf8');

//ChatGptの各種設定
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//ChatGptの実行
var ChatGtpAnswer = (async () => {
        var a = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: chatGptTemplate }],
    });
    return a.data.choices[0].message;
})();


//テスト出力
console.log(ChatGtpAnswer);

/*
http.createServer( (request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello World');
}).listen(port);
*/